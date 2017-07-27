$(function() {
  if(location.href==="https://ou-idp.auth.osaka-u.ac.jp/idp/sso_redirect?"||location.href==="https://ou-idp.auth.osaka-u.ac.jp/idp/authnPwd") {
    location.href = document.referrer;
  }
  else {
    $('body').hide();
    $('html').append("<div id='tk-ouLogin'><div id='tk-ouLogin-title'>大阪大学ITサービスにログイン</div><form id='tk-ouLogin-form' name='tk-ouLogin-form'><div class='tk-ouLogin-form-inputBox'><span>大阪大学個人ID: </span><br><input id='tk-ouLogin-form-id' type='text'></div><div class='tk-ouLogin-form-inputBox'><span>パスワード: </span><br><input id='tk-ouLogin-form-pass' type='password'></div><div id='tk-ouLogin-form-submitBox'><input id='tk-ouLogin-form-submit' type='submit' value='登録/ログイン'></div></form></div>");
    $('title').text("阪大ITサービス - ログイン by Takuma.K");
    setTimeout(function(){activate();}, 1);
  }
});

function activate() {
  setTimeout(function() {$('#tk-ouLogin').animate({
    opacity: 1
  }, {
    duration: 250
  });},499);
  $('#tk-ouLogin-form-submit').click(function() {
    if($('#tk-ouLogin-form-id').css("background-color")=="rgb(250, 255, 189)") {
      $('#USER_ID').val($('#tk-ouLogin-form-id').val());
      $('#USER_PASSWORD').val($('#tk-ouLogin-form-pass').val());
      $("input[name=cmdForm\\.Submit]").click();
      return false;
    }
    else {
      return true;
    }
  });
  setInterval(function() {
    if($('#tk-ouLogin-form-id').css("background-color")=="rgb(250, 255, 189)"&&$('#tk-ouLogin-form-pass').val()) {
      $('#tk-ouLogin-form-submit').click();
    }
  },200);
}

/*function tkOuLogin() {
  var NForm = document.forms.cmdForm;
  NForm['USER_ID'].value = $('#tk-ouLogin-form-id').val();
  NForm['USER_PASSWORD'].value = $('#tk-ouLogin-form-pass').val();
  NForm['IDButton'].value = "ログイン";
  window.document.cmdForm.submit();
}*/
