export default function downLoad(fileUrl, fileName) {
  var aEle = document.createElement('a')
  console.log(fileUrl, fileName)
  aEle.href = fileUrl
  aEle.download = fileName
  document.body.appendChild(aEle)
  aEle.click()
  console.log(aEle)
  document.body.removeChild(aEle)
}
