window.jQuery = function(nodeOrSelector) {
  let nodes = {}
  nodes.addClass = function() {}
  nodes.html = function() {}
  return nodes
}

window.jQuery.ajax = function({url, method, body, successFn, failFn, headers}) { //解构赋值 let {a, b, c d} = options
  // if (arguments.length == 1) {
  //   url = options.url
  // } else if (arguments.length == 2) {
  //   url = arguments[0]
  //   options = arguments[1]
  // }

  let request = new XMLHttpRequest()
  request.open(method, url)
  request.onreadystatechange = () => {
    if (request.readyState == 4) {
      if (request.status >= 200 && request.status < 300) {
        successFn.call(undefined, request.responseText)
      } else {
        failFn.call(undefined, request)
      }
    }
  }
  request.send(body)
}

window.$ = window.jQuery

myButton.addEventListener('click', (event) => {
  $.ajax({
    method: "POST",
    url: "/xxx",
    successFn: (responseText) => {
      console.log('success')
    },
    failFn: (request) => {
      console.log(request)
    }
  })
})