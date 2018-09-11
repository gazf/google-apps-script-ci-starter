function doGet(e) {
  var response = ContentService.createTextOutput("published by wercker!");
  response.setMimeType(ContentService.MimeType.TEXT);
  return response;
}
