export const getPlatform = () => {
    const ua = window.navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox &&
            /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet, //平板
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}

export const evalScripts = (text) => {
    var script, scripts;
    scripts = [];
    var regexp = /<script[^>]*>([\s\S]*?)<\/script>/gi;
    while ((script = regexp.exec(text))) scripts.push(script[1]);
    scripts = scripts.join('\n');
    // @ts-ignore
    if (scripts) (window.execScript) ? window.execScript(scripts) : window.setTimeout(scripts, 0);


    // 这个是我写的
    // const scripts = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.exec(htmlStr);
    // if (scripts) {
    //     const [script] = scripts;
    //     const scriptContent = script.replace(/<\/?script[^>]*>/ig, "");
    //     evalScripts(script)
    //     eval(scriptContent);
    // }
}

