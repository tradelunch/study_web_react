import * as R from 'ramda';

const ctxForWebpack4: Worker = self as any;

// worker send
ctxForWebpack4.postMessage({ payload: { msg: 'webpack4 worker created' } });

// worker read
ctxForWebpack4.addEventListener('message', (event) => {
    console.log('webpack4 with worker-loader read:: ', R.prop('data')(event));
});
