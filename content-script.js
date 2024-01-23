(function () {
    console.log('隐藏知乎学堂直播课堂无关内容');

    setTimeout(() => {
        //隐藏appbar
        hide('PcContent-shelfTopNav-');
        hide('FloatingWindow-root-');
        //hide 右下角广告
        // hide('ProductIntro-root-')
        // hide('PcLive-customerCall-')
    }, 1000);

    setStyle('PcLive-liveWrapper-', {
        padding: '0',
        width: '100%'
    })

    setStyle('PcContent-root-', {
        width: '100%'
    })

    setStyle('PcLive-player-', {
        width: 'calc(100% - 306px)'
    })

    setStyle('PcPlayer-playerWrapper-', {
        height: '100vh'
    })

    setStyle('PcLive-chatBox-', {
        height: '100vh'
    })

    function setStyle(str, attr) {
        // 找到所有具有指定类名的元素
        let elements = document.querySelectorAll('[class^=' + str + ']');
        // 遍历找到的元素并隐藏它们
        for (let i = 0; i < elements.length; i++) {
            // console.log(elements[i])

            for (let attrKey in attr) {
                elements[i].style[attrKey] = attr[attrKey];
            }
            // elements[i].style.padding = '0';
        }
    }


    function hide(str) {
        // 找到所有具有指定类名的元素
        let elements = document.querySelectorAll('[class^=' + str + ']');
        // 遍历找到的元素并隐藏它们
        for (let i = 0; i < elements.length; i++) {
            // console.log(elements[i])
            elements[i].style.display = 'none';
        }
    }
})();