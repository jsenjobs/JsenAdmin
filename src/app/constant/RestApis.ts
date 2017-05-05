/**
 * Created by jsen on 2017/3/15.
 */


export  class RestApis {
  private static ip = "120.25.217.56";
  public static fileListUrl = "http://localhost:8082/had/ltr"; // do get
  public static dirCreateUrl = "http://localhost:8082/mud"; // do post
  public static fileUploadUrl = "http://localhost:8082/mup"; // do post

  public static notebookUrl = "http://"+RestApis.ip+"/note/list/notebook";// do get
  public static noteListAllUrl = "http://"+RestApis.ip+"/note/listAll";// do get
  public static noteListUrl = "http://"+RestApis.ip+"/note/list";// do get
  // title describe url
  public static saveNoteMetaUrl = "http://"+RestApis.ip+"/note/insert"; // do post
  // title describe url
  public static updateNoteMetaUrl = "http://"+RestApis.ip+"/note/update"; // do post
  // http://www.jsendev.com:3002/note/delete/:title
  public static deleteNoteMetaUrl = "http://"+RestApis.ip+"/note/delete"; // do get



  // http://www.jsendev.com:3000/download/show/:fileName
  public static fetchNoteDataUrl = "http://"+RestApis.ip+"/objectstore/download/show"; // do get
  // strName str
  public static saveNoteDataUrl = "http://"+RestApis.ip+"/objectstore/update/text"; // do post
  // http://www.jsendev.com:3000/update/delete/:fileName
  public static deleteNoteDataUrl = "http://"+RestApis.ip+"/objectstore/update/delete"; // do get
}
