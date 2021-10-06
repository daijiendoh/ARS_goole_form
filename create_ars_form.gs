function createEventForm(){
 
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
  let lcode=Utilities.formatString("%0d",sheet.getRange('A2').getValue());
  let lname=sheet.getRange('B2').getValue();
  let lkai=sheet.getRange('C2').getValue();
  let ldate=Utilities.formatDate(sheet.getRange('D2').getValue(),"JST","MMdd");
  
  let lcdd1=lname+"_"+lkai+"_"+ldate
  
  Logger.log(lcdd1)
  const form1 = FormApp.create(lcdd1);
  form1.setDescription('Web会議参加者のみ回答に配点されます')
  form1.addTextItem().setTitle('学籍番号').setRequired(true);
  form1.addTextItem().setTitle('回答'); 
  
  
  // 公開用URLを取得
  var shturl = form1.getPublishedUrl();
  // シートでQRコードを作成するための　変換用URL
  
  // スプレッドシートに書き込み_列名を生成
  sheet.getRange('A4').setValue("ページ名");
  sheet.getRange('B4').setValue("公開用URL");
  sheet.getRange('C4').setValue("QRコード");

  // スプレッドシートに書き込み_内容を書き込み
  sheet.getRange('A5').setValue(lcdd1);
  sheet.getRange('B5').setValue(shturl);

}