const { src, dest, series, watch } = require('gulp')
const gulpI18nWxml = require('@miniprogram-i18n/gulp-i18n-wxml')
const gulpI18nLocales = require('@miniprogram-i18n/gulp-i18n-locales')
const changed = require('gulp-changed')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

function mergeAndGenerateLocales () {
  return src(['src/**/i18n/*.json', '!src/node_modules/**/i18n/*.json'])
    .pipe(gulpI18nLocales({ defaultLocale: 'zh-CN', fallbackLocale: 'zh-CN' }))
    .pipe(dest('dist/i18n/'))
}

function transpileWxml () {
  return src(['src/**/*.wxml', '!src/node_modules/**/*.wxml'])
    .pipe(gulpI18nWxml())
    .pipe(dest('dist/'))
}

function copyToDist () {
  return src(['src/**/*', '!src/**/*.wxml', '!src/**/i18n/*.json', '!src/**/*.scss', '!src/**/*.wxss', '!src/node_modules/**/*'])
    .pipe(changed('dist/'))
    .pipe(dest('dist/'))
}

function transpileSass () {
  return src(['src/**/*.scss', '!src/node_modules/**/*.scss'])
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(rename(path => {
      console.log('变化的', path)
      path.extname = '.wxss'
    }))
    .pipe(changed('dist/'))
    .pipe(dest('dist/'))
}

function watchTask () {
  watch(['src/**/i18n/*.json', '!src/node_modules/**/i18n/*.json'], { ignoreInitial: false }, mergeAndGenerateLocales)
  watch(['src/**/*.wxml', '!src/node_modules/**/*.wxml'], { ignoreInitial: false }, transpileWxml)
  watch(['src/**/*.js', '!src/node_modules/**/*.js', '!src/miniprogram_npm/**/*.js'], { ignoreInitial: false }, function (cb) {
    return src(['src/**/*.js', '!src/node_modules/**/*.js', '!src/miniprogram_npm/**/*.js'])
      .pipe(changed('dist/'))
      .pipe(dest('dist/'))
  })
  watch(['src/**/*.json', '!src/node_modules/**/*.json', '!src/**/i18n/*.json'], { ignoreInitial: false }, function () {
    return src(['src/**/*.json', '!src/node_modules/**/*.json', '!src/**/i18n/*.json'])
      .pipe(changed('dist/'))
      .pipe(dest('dist/'))
  })
  // 监听wxs
  watch(['src/**/*.wxs', '!src/node_modules/**/*.wxs'], { ignoreInitial: false }, function () {
    return src(['src/**/*.wxs'])
      .pipe(changed('dist/'))
      .pipe(dest('dist/'))
  })
  // 监听静态资源
  watch('src/assets/**/*', { ignoreInitial: false }, function () {
    return src('src/assets/**/*')
      .pipe(changed('dist/assets/'))
      .pipe(dest('dist/assets/'))
  })
  // 监听scss
  watch(['src/**/*.scss', '!src/node_modules/**/*.scss'], { ignoreInitial: false }, function () {
    return transpileSass()
  })

  // 监听wxss
  // watch(['src/**/*.wxss', '!src/node_modules/**/*.wxss'], { ignoreInitial: false }, function () {
  //   return src(['src/**/*.wxss'])
  //     .pipe(changed('dist/'))
  //     .pipe(dest('dist/'))
  // })
}

exports.default = series(copyToDist, transpileWxml, mergeAndGenerateLocales, transpileSass)
exports.watch = watchTask
exports.sass = transpileSass
