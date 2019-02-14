window.jQuery = function(nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function() {}
  nodes.html = function() {}
  return nodes
}

window.jQuery.ajax = function({url, method, body, headers}) { //解构赋值 let {a, b, c d} = options
  // if (arguments.length == 1) {
  //   url = options.url
  // } else if (arguments.length == 2) {
  //   url = arguments[0]
  //   options = arguments[1]
  // }
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest()
    request.open(method, url)
    request.onreadystatechange = () => {
      if (request.readyState == 4) {
        if (request.status >= 200 && request.status < 300) {
          resolve.call(undefined, request.responseText)
        } else {
          reject.call(undefined, request)
        }
      }
    }
    request.send(body)
  })
}

window.$ = window.jQuery

myButton.addEventListener('click', (event) => {
  $.ajax({
    method: "POST",
    url: "/xxx"
  }).then((text) => {
    console.log(text)
  }, (requery) => {
    console.log('error')
  })
  // jQuery.ajax({
  //   url: '/xxx',
  //   method: "POST",
  //   success: (data, textStatus) => {
  //     console.log(textStatus)
  //   },
  //   error: (x) => {
  //     console.log(x)
  //   }
  // })

})