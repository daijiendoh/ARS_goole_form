function createEventForm(){
 
  const sheet = SpreadsheetApp.getActiveSpreadsheet()
  let lcode=Utilities.formatString("%0d",sheet.getRange('A2').getValue());
  let lname=sheet.getRange('B2').getValue();
  let lkai=sheet.getRange('C2').getValue();
  let ldate=Utilities.formatDate(sheet.getRange('D2').getValue(),"JST","MMdd");
  
  let lcdd1=lname+"_"+lkai+"_"+ldate
  
  Logger.log(lcdd1)
  const form1 = FormApp.create(lcdd1);
  form1.setDescription('Web��c�Q���҂̂݉񓚂ɔz�_����܂�')
  form1.addTextItem().setTitle('�w�Дԍ�').setRequired(true);
  form1.addTextItem().setTitle('��'); 
  
  
  // ���J�pURL���擾
  var shturl = form1.getPublishedUrl();
  // �V�[�g��QR�R�[�h���쐬���邽�߂́@�ϊ��pURL
  
  // �X�v���b�h�V�[�g�ɏ�������_�񖼂𐶐�
  sheet.getRange('A4').setValue("�y�[�W��");
  sheet.getRange('B4').setValue("���J�pURL");
  sheet.getRange('C4').setValue("QR�R�[�h");

  // �X�v���b�h�V�[�g�ɏ�������_���e����������
  sheet.getRange('A5').setValue(lcdd1);
  sheet.getRange('B5').setValue(shturl);

}