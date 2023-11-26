const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    stats: {
        preset: 'errors-only', // 오류만 // 'minimal' | 'errors-only'
        // 통계 사전 설정

        env: true,
        // 출력에 --env 값 포함
        outputPath: true,
        // 출력에 절대 출력 경로 포함
        publicPath: true,
        // 출력에 퍼블릭 경로 포함

        assets: true,
        // 출력에 애셋 목록 표시

        entrypoints: true,
        // 엔트리포인트 목록 표시
        chunkGroups: false,
        // 명명된 청크 그룹 목록 표시

        chunks: false,
        // 출력에 청크 목록 표시

        warnings: false,
        // 경고 표시

        errors: true,
        // 오류 표시
        errorDetails: true,
        // 오류에 대한 세부 정보 표시
        errorStack: true,
        // 오류에 대한 내부 스택 추적 표시
        moduleTrace: true,
        // 오류에 대한 모듈 추적 표시
        // (왜 모듈 참조가 발생했는지)
        builtAt: true,
        // 요약에 타임 스탬프 표시
        errorsCount: true,
        // 요약에 오류 수를 표시
        warningsCount: false,
        // 요약에 경고 수를 표시
        timings: false,
        // 요약에 빌드 타이밍 표시
        version: true,
        // 요약에 webpack 버전 표시
        hash: true,
        // 요약에 빌드 해시 표시
    },
    devServer: {
        watchFiles: ['src/**/*', 'public/**/*', 'dist/**/*'],
        client: {
            progress: true, // Prints compilation progress in percentage in the browser.
            logging: 'error', // 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'
            overlay: {
                errors: false,
                warnings: false,
            },
        },
        open: false, // Tells dev-server to open the browser after server had been started.
        historyApiFallback: true, // 404일때 index.html을 표시하려면 true, 복수의 경로를 적용하려면 객체
        static: [
            {
                directory: path.resolve(__dirname, 'public'),
                publicPath: '/public',
            },
            {
                directory: path.resolve(__dirname, 'assets'),
                publicPath: '/assets',
            },
        ],
        hot: 'only', // 'only', boolean = true // reload only changes
        liveReload: false, // refresh entire app
        compress: true, // gzip 압축 활성화
        https: false, // self-signed의 경우 true, 인증 기관의 경우 객체
        port: 8080,
        // publicPath: '/',
        proxy: {
            '/api': 'http://localhost:4000', // ex
        },
    },
});
