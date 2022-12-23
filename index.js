window.onload = function () {
    var treeContainer = document.querySelector('.tree-container')
    var tree = document.querySelector('.tree')
    var treeWidth = treeContainer.clientWidth - 2
    var treeHeiht = treeContainer.clientHeight
    var dialogText = document.querySelector('#dialog-text')
    var dialogTextL = dialogText.querySelector('.left-text')
    var dialogTextR = dialogText.querySelector('.right-text')
    var dialogSocksLeft = dialogText.querySelector('.socks-left')
    var dialogSocksRight = dialogText.querySelector('.socks-right')
    var dialogClose = dialogText.querySelector('.close')
    var video = document.querySelector('.video')
    var isOpenVideo = false

    document.addEventListener('click',()=>{
        if(!isOpenVideo){
            video.muted = false
            video.play()
            isOpenVideo = true
        }
    })

    var isOpenDialog = false

    var paragraph = Math.floor(treeHeiht / 25)
    var paragraphWidth = Math.floor((treeWidth - 80) / paragraph)
    var textIndex = 0

     
    
    var textList = [
        {
            left: '今天是12月7号',
            right: '今天是第一天给你写圣诞树'
        },
        {
            left: '别人写的虽然好看，但是没有诚意',
            right: 'emmmm，虽然我写的有诚意，但是好丑呀'
        },
        {
            left: '要从哪里下手呢',
            right: '看别人写感觉很简单，自己写好难呀'
        },
        {
            left: '你说我要配一首什么歌呢',
            right: '感觉你爱听的歌好像都是emo的，总不能放一首爱情买卖吧'
        },
        {
            left: '晚上不知道你在干嘛',
            right: '不会又在睡觉吧'
        },
        {
            left: '你一觉睡到下午',
            right: '我还以为你不想理我了'
        },
        {
            left: '虽然不知道你是怎么想的',
            right: '但是我其实很想你呀'
        },
        {
            left: '我们的距离好像越来越远了',
            right: '虽然我也有这种感觉，但是我其实不想这样，我想每天粘着你'
        },
        {
            left: '其实你还是那个好吃鬼',
            right: '天天就想吃这个想吃那个，虽然我也想吃哈哈哈'
        },
        {
            left: '你说我们还会不会见面',
            right: '我想见到你的时候你会兴奋的给我一个熊抱，虽然可能不能实现'
        },
        {
            left: '我前几天梦见你了，你还是那么可爱',
            right: '梦里我们好像忘记了过去，我牵着你的手两个人好温柔啊'
        },
        {
            left: '光喝牛奶可不能让身体变好',
            right: '你要好好照顾自己，生活不仅仅是开心，生病也会难受的'
        },
        {
            left: '时间过得好快，马上又要过年了',
            right: '今年好像又什么都没有，还把你丢了'
        },
        {
            left: '哈哈，不知道你看到这个的时候是什么时候',
            right: '不过按我的尿性，可能坚持不到那天才给你'
        },
        {
            left: '今天是11号',
            right: '突然有点不知道说什么'
        },
        {
            left: '其实不知道该不该把这些字给你看',
            right: '因为有时候真的觉得这么做对你来说毫无含义'
        },
        {
            left: '你想的是我做很多很多的事情，可我觉得我更加想要的是一种双向奔赴的爱情',
            right: '可能是我们两个人真的不太合适'
        },
        {
            left: '但是哪有那么多合适，我们刚刚住在一起那段时间也会有很多做不好的事情',
            right: '我能接受你的问题，你也可以接受我的问题，还会主动来问我为什么我会那么不开心，你应该怎么做'
        },
        {
            left: '其实两个人相处，哪有那么多顾虑',
            right: '对我来说，你能够坚定的和我在一起，我就真的好开心呀'
        },
        {
            left: '我妈打电话，老是让我给她看看房间里面是不是有女孩子，我说我在外面吃饭他就会问我是不是一个人吃饭，是不是跟小女友吃饭',
            right: '这个老顽童，不过其实她早就知道我们两个在一起了，她甚至知道你的名字，我也不知道她怎么知道的。'
        },
        {
            left: '啊，原来写这些话比写代码还难写',
            right: '我以后再慢慢补吧，今天先完成我的代码吧'
        },
        {
            left: '今天15号了这感冒终于好多了',
            right: '前两天实在是没有精力完成它了'
        },
        {
            left: '你没有看见我发的朋友圈吗，前两天太难受了',
            right: '为什么你能做到毫不关心，可能我们两个真的在渐行渐远了'
        },
        {
            left: '今天是18号，时间过的好快，我总以为会很早交给你，没想到还是一个大工程',
            right: '这几天天天都在梦见你，每天晚上想起你来都睡不着，其实我不应该这样了，我这样好累呀'
        },
        {
            left: '我王者24颗星了哈哈哈哈，第一次这么多星星，可惜你最近是在打麻将？',
            right: '在家打麻将吗？天天就知道打牌，年轻人呀，要努力学习努力赚钱。'
        },
        {
            left: '我们家里人全阳了，我还在笑我妹妹，谁让她叫欧阳洋，这下真阳了吧哈哈哈',
            right: '你自己在老家注意一点，阳了还是很难受的，我想寄点药给你，现在外面的药都被抢完了。我在想你要是阳了会不会和我说，我可能会马上跑到安仁去照顾你'
        },
        {
            left: '今天23号，明天就圣诞节了。本来早就该完成的，没想到这该死的新冠这么厉害。',
            right: '我想做的细节又多，确实也费时间。'
        },
        {
            left: `没了。`,
            right: ''
        }
        // {
        //     left: `马上就要元旦了，之前还兴致满满的@你今年和你一起跨年，我的爱很纯粹，你当时让我做圣诞树，我就做，我还觉得那个太大众了我自己做一个给你。你找我打了一次王者，我就会不停的找你打游戏。
        //     但是这十几天过来咱俩的关系好像还不如刚加回来的时候，我这疫情严重你还会偶尔关心我一下。现在感觉你连消息也不想回了。`,
        //     right: ''
        // },
        // {
        //     left: `也是，我们分开也大半年了。时间拖得越久越可怕不是吗，所以当时才那么想见你。可能有些东西就是强求不来吧，哪怕到现在晚上都不敢多回忆一下，要不然就容易烦躁失眠。
        //     但是我也知道这种状态是不对的，我并不觉得这样是你说的顺其自然，可能只有你顺其自然了，最后把我一个人卡死在梦魇里面了。`,
        //     right: ''
        // }
    ]

    tree.addEventListener('click',(e)=>{
        var text_idx = e.target.getAttribute('text_idx')
        if(text_idx || text_idx == 0){
            text_idx = Number(text_idx)
            if(!isOpenDialog){
                isOpenDialog = true
                // dialogText.style.display = 'block'
            }
            // dialogTextL.innerText = textList[text_idx].left
            // dialogTextR.innerText = textList[text_idx].right
            textIndex = text_idx
        }
    })

    var toggleTextIndex = function(bool){
        var idx = bool ? textIndex + 1 : textIndex - 1 
        var textNode = textList[idx]
        if(textNode){
            textIndex = idx
            // dialogTextL.innerText = textNode.left
            // dialogTextR.innerText = textNode.right
        }
    }

    dialogClose.onclick = function (){
        dialogText.style.display = 'none'
        isOpenDialog = false
    }

    dialogSocksLeft.onclick = toggleTextIndex.bind(this,false)
    dialogSocksRight.onclick = toggleTextIndex.bind(this,true)

    function renderBranch(surplusHeiht,i = 0) {
        if (surplusHeiht > 25) {
            var branchLeft = document.createElement('div')
            var branchChildLeft = document.createElement('div')
            var branchRight = document.createElement('div')
            var branchChildRight = document.createElement('div')

            branchLeft.className = 'branch branch-left'
            branchRight.className = 'branch branch-right'
            branchChildLeft.className = 'branch-child'
            branchChildRight.className = 'branch-child'
            branchChildLeft.setAttribute('text_idx',i)
            branchChildRight.setAttribute('text_idx',i); 

            branchChildLeft.innerText = textList[i].left
            branchChildRight.innerText = textList[i].right

            branchLeft.style.transform = `rotateY(${Math.round(Math.random()*80) + 10}deg)`
            branchRight.style.transform = `rotateY(${Math.round(Math.random()*80) + 10}deg)`

            branchLeft.style.bottom = treeHeiht - surplusHeiht + 'px'
            branchRight.style.bottom = treeHeiht - surplusHeiht + 'px'
            branchLeft.style.width = treeWidth - i*paragraphWidth + 'px'
            branchRight.style.width = treeWidth - i*paragraphWidth   + 'px'
            
            branchLeft.appendChild(branchChildLeft)
            branchRight.appendChild(branchChildRight)
            tree.appendChild(branchLeft)
            tree.appendChild(branchRight)

            surplusHeiht -= 25
            i++

            renderBranch(surplusHeiht,i)
        }
    }
    renderBranch(treeHeiht)
}