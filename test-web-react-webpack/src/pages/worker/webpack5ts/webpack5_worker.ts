import * as R from 'ramda';

const ctxForWebpack5: Worker = self as any;

ctxForWebpack5.postMessage({
    payload: { msg: 'webpack5::send' },
});

ctxForWebpack5.addEventListener('message', (event) => {
    console.log('webpack5::read ', R.prop('data')(event));
});
