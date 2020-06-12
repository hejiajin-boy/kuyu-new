//第一种 CORS 
const request = new XMLHttpRequest()
request.open('GET', 'http://hejiajin:8888/friends.json')
request.onreadystatechange = () => {
    if (request.status === 200 && request.readyState === 4) {
        console.log(request.response)
    }
}
request.send()

// 第二种JSONP

/*const random = 'heikeJSONPCall' + Math.random()
console.log(random) //打印出随机数
    //跨网站的回调函数
window[random] = (data) => {
    console.log(data)
};
const script = document.createElement('script')
script.src = `http://localhost:8888/friends.js?functionName =${random}` //把随机数传进去
script.onload = () => {
    script.remove()
}
document.body.appendChild(script)*/






//封装JSONP
/*function jsonp(url) {
    return new Promise((resolve, reject) => {

        const random = "heikeJSONPCallbackName" + Math.random();
        window[random] = (data) => {
            resolve(data)
        };
        const script = document.createElement("script");
        script.src = `${url}?callback =${random}`
        script.onload = () => {
            script.remove()
        };
        script.onerror = () => {
            reject();
        };
        document.body.appendChild(script)
    });
}


jsonp('http://localhost:8888/friends.js').then((data) => { console.log(data) })

//JSONP 拿不到状态码*/