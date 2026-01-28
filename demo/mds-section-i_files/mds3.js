var MDSQuestionValidationRules = {};
var unsignCopied = "N";
var sectionRegex = /^([a-z]+).*/ig;

//----------------------------------Toolkit Functions: Start-------------------------------------------//
function populateToolkit(assessId,questionId)
{
  DWREngine.setAsync(false);
  ToolkitController.getToolkitLinksInfo(assessId,questionId, toolKitCallBack);
}

function getSectionFromQuestionKey(questionKey)
{
	sectionRegex.lastIndex = 0;
	var match = sectionRegex.exec(questionKey);
	var section = "";

	if (match != null)
	{
		section = match[1];
		if (section === "SVA")
		{
			section = "S";
		}
	}

	return section;
}

function toolKitCallBack(ToolkitInfoDto)
{
	updateToolkit(ToolkitInfoDto);

	//reposition and show
	var toollinkOffset = $('#'+ToolkitInfoDto.questionId+'_wrapper').find('a.toollink').offset();
	var tkTop = (toollinkOffset['top'] + 32) + 'px';
	var tkLeftVal = (toollinkOffset['left'] - $('#questiontoolkit').width() + 50);
	if (tkLeftVal < 10) {
		tkLeft = 10;
	} else {
		tkLeft = tkLeftVal;
	}
	if (!notCssDisabled()) {
		$('#questiontoolkit').css({'background-color' : 'rgb(220,220,220)'});
	}
	$('#questiontoolkit').css({'top': tkTop, 'left': tkLeft + 'px', 'position': 'absolute'});
	$('#questiontoolkit').show();
	$('#questiontoolkit').focus();
}

function updateToolkit(ToolkitInfoDto)
{
	updateNotes(ToolkitInfoDto);

	var auditTrailText = (ToolkitInfoDto.auditTrailLastChange)? ToolkitInfoDto.auditTrailLastChange : ''; //$('#auditTrail').text(null) doesn't update text
	$('#auditTrail').text(auditTrailText);

	setRAIManualLinks(ToolkitInfoDto);

	setEducationParameters(ToolkitInfoDto);

	//Toggle display text or links
	toggleLink('priorMDS',ToolkitInfoDto.enablePriorMDS);
	toggleLink('lookBack',ToolkitInfoDto.enableLookBack);
	toggleLink('systemTriggers',ToolkitInfoDto.enableSystemTriggers);
	toggleLink('education',ToolkitInfoDto.enableEducation);
	populateCareArea(ToolkitInfoDto);
	populateRugs(ToolkitInfoDto);

	//Update Links
	$('#notes_view_link').find('a').attr('href', 'javascript:viewNotes('+ToolkitInfoDto.assessId+',\''+ToolkitInfoDto.questionId+'\');');
	$('#notes_add_link').find('a').attr('href', 'javascript:addNotes('+ToolkitInfoDto.assessId+',\''+ToolkitInfoDto.questionId+'\');');
	$('#systemTriggers_link').find('a').attr('href', 'javascript:viewTriggers(\''+ToolkitInfoDto.questionId+'\');');
	$('#lookBack_link').find('a').attr('href', 'javascript:viewLookback('+ToolkitInfoDto.assessId+',\''+ToolkitInfoDto.questionId+'\');');
	$('#audit_trail_link').attr('href', 'javascript:viewAuditTrailReport('+ToolkitInfoDto.assessId+',\''+ToolkitInfoDto.sectionCode+'\',\''+ToolkitInfoDto.questionId+'\','+ToolkitInfoDto.clientId+');');
	$('#priorMDS_link').find('a').attr('href', 'javascript:viewPriorMDS('+ToolkitInfoDto.assessId+',\''+ToolkitInfoDto.questionId+'\');');

	//Change descriptions based on enable flag - PCC-17361
	if (!(ToolkitInfoDto.enableEducation)) {
		$('#education_text').text('Subscription Required');
	}
	if (!(ToolkitInfoDto.enableSystemTriggers)) {
		$('#systemTriggers_text').text('None');
	}
	if (!(ToolkitInfoDto.enableLookBack)) {
		$('#lookBack_text').text('None');
	}

	if (!(ToolkitInfoDto.enablePriorMDS)) {
		$('#priorMDS_text').text('None');
	}

	var sectionCode = getSectionCode(ToolkitInfoDto);
	if('S' != sectionCode)
	{
	  $('#education_link').find('a').attr('href', 'javascript:openEducationWin(\''+$('#questiontoolkit').data('sectionCode')+'\',\''+$('#questiontoolkit').data('questionNo')+'\');');
	}
	else
	{
	  $('#education_link').find('a').removeAttr("href");
	  $('#education_link').find('a').css("color", "black");
	}

	if (!(ToolkitInfoDto.mds3NotesEnable)) {
		$('#notes_view_link').hide();
		$('#notes_add_link').hide();
	}
}

function getQuestionId(ToolkitInfoDto)
{
  var questionId = ToolkitInfoDto.questionId;

  if(questionId == null)
  {
    questionId = "";
  }

  //Only need the first 5 chars for the bookmark
  if(questionId.length > 5)
  {
    questionId = questionId.substring(0,5);
  }

  return questionId;
}

function getSectionCode(ToolkitInfoDto)
{
  var sectionCode = ToolkitInfoDto.sectionCode;
  var questionId = getQuestionId(ToolkitInfoDto);

  if(sectionCode == null)
  {
    sectionCode = "";
  }

  //If sectionCode is empty try to set it from the questionId
  if(sectionCode == "" && questionId != "" && questionId.charAt(0) != "")
  {
	sectionCode = getSectionFromQuestionKey(questionId);
  }

  return sectionCode;
}

function setRAIManualLinks(ToolkitInfoDto)
{
  var sectionCode = getSectionCode(ToolkitInfoDto);
  var questionId = getQuestionId(ToolkitInfoDto);

  if('S' != sectionCode)
  {
    var rai_manual_link_href = 'javascript:viewRAIManual("' + sectionCode + '", "' + questionId + '");';
    $('#rai_manual_link_1').attr('href', rai_manual_link_href);
    $('#rai_manual_link_2').attr('href', rai_manual_link_href);
  }
  else
  {
    $('#rai_manual_link_1').removeAttr("href");
    $('#rai_manual_link_1').css("color", "black");
    $('#rai_manual_link_2').removeAttr("href");
    $('#rai_manual_link_2').css("color", "black");
  }
}

function setEducationParameters(ToolkitInfoDto)
{
	$('#questiontoolkit').data('educationUrl',ToolkitInfoDto.educationUrl);
	$('#questiontoolkit').data('educationQuestionPageUrl',ToolkitInfoDto.educationQuestionPageUrl);
	$('#questiontoolkit').data('educationUsername',ToolkitInfoDto.educationUsername);
	$('#questiontoolkit').data('educationPassword',ToolkitInfoDto.educationPassword);
}

function populateCareArea(ToolkitInfoDto)
{
	var careAreas = "";
	var notAdded = true;

	for(var i=0; i<4;i++)
	{
		careAreas = "";
		if(ToolkitInfoDto.careAreas.length>i)
		{
			if(ToolkitInfoDto.careAreas[i].length>13)
			{
				careAreas =  ToolkitInfoDto.careAreas[i].substr(0,13) + "...";
			}
			else
			{
				careAreas =  ToolkitInfoDto.careAreas[i];
			}
			notAdded = false;
		}
		$('#careAreasList'+i).text(careAreas);
	}
	if(notAdded)
	{
		// $('#careAreasList'+2).html('<span style="color: #0C0;font-size:12pt">None</span>');
		$('#careAreasList'+1).html('<span style="font-size:12pt">None</span>');
	}
}


function populateRugs(ToolkitInfoDto)
{
	var rugHeading = "";
	var rugs = [];

	for(var i=0; i<ToolkitInfoDto.rug.length;i++)
	{
		rugHeading = "";
		if(ToolkitInfoDto.rug[i].length>13)
		{
			rugHeading =  ToolkitInfoDto.rug[i].substr(0,13) + "...";
		}
		else
		{
			rugHeading =  ToolkitInfoDto.rug[i];
		}
		rugs.push(rugHeading);
	}

	$('#rugsArea').html('');
	if(ToolkitInfoDto.rug == null || ToolkitInfoDto.rug.length == 0)
	{
		//$('#rugsArea').html("<img src=\"/images/na_icon.gif\" width=\"50\" height=\"50\" border=\"0\"/>");
		//$('#rugsArea').html('<br/><span style="color: #0C0;font-size:12pt">None</span>');
		$('#rugsArea').html('<br/><span style="font-size:12pt">None</span>');

	} else {
		$('#rugsArea').html(rugs.join('<br/>'));
	}
}


function toggleLink(spanName,showLink)
{
	if(showLink)
	{
		$('#'+spanName+'_link').show();
		$('#'+spanName+'_text').hide();
	}
	else
	{
		$('#'+spanName+'_link').hide();
		$('#'+spanName+'_text').show();
	}
}

function updateNotes(ToolkitInfoDto)
{
	if(ToolkitInfoDto.numberOfNotes > 0)
	{
		$('#notes_view_link').show();
	}
	else
	{
		$('#notes_view_link').hide();
	}
}

function addNotes(assessId,questionId)
{
	$('#questiontoolkit').hide();
	openPopup('/care/chart/mmds/editfootnote.jsp?ESOLassessid='+assessId+'&ESOLquestionkey='+questionId+'&ESOLreadonly=N&ESOLisMDS3=Y', 'assess_popup', 0, 0, 'left=10,top=10,width=600,height=450,toolbar=no,status=no,directories=no,menubar=no,resizable=yes,scrollbars=1', false);
}

function viewRAIManual(sectionCode, questionId)
{
	if(sectionCode == '' || questionId == '')
	{
	  alert("Could not locate help section. Please contact site administrator.");
	}
	else
	{
	  var params  = 'width='+screen.width;
	  params += ', height='+screen.height;
	  params += ', top=0, left=0';
	  $('#questiontoolkit').hide();
	  var raiManualWindow = window.open('/help/clinical/Section_' + sectionCode + '.pdf#' + questionId, 'raiManualWindow', params);
	}
}

function viewNotes(assessId,questionId)
{
	openPopup('/care/chart/mmds/editfootnote.jsp?ESOLassessid='+assessId+'&ESOLquestionkey='+questionId+'&ESOLreadonly=Y&ESOLisMDS3=Y', 'assess_popup', 0, 0, 'left=10,top=10,width=600,height=450,toolbar=no,status=no,directories=no,menubar=no,resizable=yes,scrollbars=1', false);
}

function viewTriggers(questionId)
{
	$('#questiontoolkit').hide();
	openPopup('/care/chart/assess/triggerresponse.jsp?ESOLstdassessid=11&ESOLquestionkey='+questionId+'&ESOLtabType=C&ESOLfromassmnt=Y', 'assess_popup', 0, 0, 'left=10,top=10,width=600,height=450,toolbar=no,status=no,directories=no,menubar=no,resizable=yes,scrollbars=1', false);
}

function viewLookback(assessId,questionId)
{
	$('#questiontoolkit').hide();
	openSizedLookup2('/care/chart/mds/assessflowmds.jsp?ESOLassessid='+assessId+'&ESOLquestionKey='+questionId+'&ESOLisMDS3=Y','',700,650,'scrollbars');
}

function viewAuditTrailReport(assessId, section, questionKey, clientId)
{
	//based from call to auditreport.jsp in printpopup.jsp
	window.open("/care/reports/auditreport.jsp?ESOLassessid=" + assessId + "&ESOLsection=" + section + "&ESOLclientid="+clientId+"&ESOLchanged=N"+"&ESOLquestionKey="+questionKey+"&ESOLr2b=N&ESOLisMDS3=Y");
}

function viewPriorMDS(assessId,questionId)
{
	$('#questiontoolkit').hide();
	openSizedLookup2('/clinical/mds3_popup/priorMDSInfo.xhtml?assessId='+assessId+'&questionKey='+questionId+'&ESOLisMDS3=Y','',700,500,'scrollbars');
}

function openEducationWin(sectionCode,questionNo)
{
	$('#questiontoolkit').hide();
	if($('#educationformdiv').length == 0){
		$('body').append('<div id="educationformdiv"></div>');//create it if it does not exist
	}
	$('#educationformdiv').html();
	var formStr = '';
	formStr += '<form id="educationform" method="post" target="_blank" action="' + $('#questiontoolkit').data('educationUrl') +'">';
    formStr += '<input type="hidden" name="u" value="' + $('#questiontoolkit').data('educationUsername') + '"/>';
    formStr += '<input type="hidden" name="p" value="' + $('#questiontoolkit').data('educationPassword') + '"/>';
    formStr += '<input type="hidden" name="pc" value="' + $('#questiontoolkit').data('educationQuestionPageUrl')+sectionCode+"/"+sectionCode+questionNo+'"/>';
    formStr += '</form>';
    $('#educationformdiv').html(formStr);
    $('#educationform').submit();
}

//----------------------------------Toolkit Functions: End-------------------------------------------//


function openMDS3Legend(){
	var scrollbarsSetting = 1;
	openPopupWin('/care/chart/mds/mds3legend.jsp', 'mds3_legend', 650, 600, 'status=1,location=0,menubar=0,resizable=1,scrollbars=' + scrollbarsSetting);
}


function addValidationRule(questionID, triggerValue, affectedQuestionData){
	if(questionID){
		if(typeof(MDSQuestionValidationRules[questionID]) == 'undefined'){
			MDSQuestionValidationRules[questionID] = [];
		}
		MDSQuestionValidationRules[questionID].push({'trigger':triggerValue,'affected':affectedQuestionData});
	}
}


function save(flag, nextSectionCode, ignoreLaunchDiagWizard){
	$('#ESOLsaveFlag').val(flag);
	if(nextSectionCode){
	  $('#assessform').attr("action", $('#assessform').attr("action") + "&sectioncode=" + nextSectionCode);
	}
	if(ignoreLaunchDiagWizard){
	  $('#assessform').attr("action", $('#assessform').attr("action") + "&ignoreLaunchDiagWizard=Y");
	}
	if (unsignCopied == "Y")
	{
		$('#assessform').attr("action", $('#assessform').attr("action") + "&unsignCopiedResponses=Y");
	}
	$('#assessform').submit();
	var saveMessage = 'Saving';
	if(typeof(nextSectionCode) != 'undefined'){
		if(nextSectionCode.toUpperCase() != MDSCurrentSectionCode){
			saveMessage += ' & Navigating to Section ' + nextSectionCode.toUpperCase();
		}
	} else if(typeof(nextSectionCode) == 'undefined'){
		saveMessage += ' & Navigating to Summary';
	}
	saveMessage += '...';
	startSpinner(saveMessage);
}

function startSpinner(msg){
	$('#sectionnavigation').html('<nobr><div style="border:0;width:400px;color:#444;"><img src="/images/loading-circle.gif" id="spinner" width="16" height="16" border="0" />&nbsp;<span style="display:inline-block;padding:2px 4px 4px 3px;">' + msg + '</span></div></nobr>');
}

function cancel(url){
	if($('form').attr('data-isdirty') != 'true'){
		location.href = url;
	} else if(confirm('Are you sure you want to exit without saving your changes?')){
		location.href = url;
	}
}


function toggleSelection(obj, field, value){
	var currState = obj.className;
	var ulObj = obj.parentNode.parentNode;
	var answers = ulObj.getElementsByTagName('a');
	for(var i=0;i<answers.length;i++){
		answers[i].className = '';
	}
	if(currState != 'selected'){
		obj.className = 'selected';
		field.val(value);
	} else {
		field.val('');
	}
	field.change();//trigger any bound change events
}

function acknowledgeAutoPop(linkObj, assessID, questionID){
	$('#ack_' + questionID).val('Y');
	$(linkObj).find('img').attr('src','/images/clinical/checkmark_green.png');
	$(linkObj).find('img').attr('title','Acknowledged');
	var found = false;
	//in jQuery 1.4 we can simplify this by using .index()
	$('a.unacknowledgedlink').each(function(i){
		if(found){
			//scroll to it...
			window.scrollTo(0, ($(this).offset()['top']) - 100);
			//focus this link object
			$(this).get(0).focus();
			return false;//break out
		} else {
			if(this == linkObj){
				found = true;
				$(linkObj).removeClass('unacknowledgedlink');
			}
		}
	});
}

function acknowledgeAutoDelta(questionID){
	var img = $('#ack_' + questionID + '_img');
	img.attr('src','/images/clinical/delta_green.png');
	img.attr('title','Autopopulated Response Overridden and Acknowledged');
	//remove wrapper link (unfortunately .unwrap(); is only available in jQuery 1.4)
	var link = img.parent('a');
	if(link.length > 0){
		link.replaceWith(link.children());
	}
}


function toggleToolsWindow(linkObj, assessID, questionID, sectionCode, questionNo){
	$('#questiontoolkit').data('assessID',assessID);
	$('#questiontoolkit').data('questionID',questionID);
	$('#questiontoolkit').data('sectionCode',sectionCode);
	$('#questiontoolkit').data('questionNo',questionNo);
	if($('#questiontoolkit:hidden').length > 0){
		populateToolkit(assessID,questionID);
	} else {
		$('#questiontoolkit').hide();
	}
}

function setupAutoSum(sumFieldID, termFieldIDs, missingOneFactor, missingTwoFactor){
	$(document).ready(function(){
		for(var i=0,tfLen=termFieldIDs.length;i<tfLen;i++){
			$('#'+termFieldIDs[i]).change(function(){
				var sum = 0;
				var assessedCount = 0;
				var skippedCount = 0;
				var dashCount = 0;
				var blankCount = 0;
				var consideredMissingCount = 0;
				var fieldValue = null;
				var termCount = termFieldIDs.length;
				for(var j=0;j<termCount;j++){
					fieldValue = $('#'+termFieldIDs[j]).val();
					if(fieldValue == ''){
						blankCount++;
					} else if(fieldValue == '-'){
						dashCount++;
					} else if(fieldValue == '^'){
						skippedCount++;
					} else {
						assessedCount++;
						sum += parseInt(fieldValue, 10);
					}
				}
				if(sumFieldID == 'C0500' && ((blankCount + skippedCount) == termCount)){
					sum = '';//edit -3660 (does not match a,b,c, or d) just leave blank
				} else {
					consideredMissingCount = blankCount + dashCount + skippedCount;
					if(consideredMissingCount > 0){
						//special logic...
						if(dashCount == termCount){
							sum = '-';//If all "-", set "-"
						} else if(sumFieldID == 'D0600' && dashCount >= 3){
							sum = '-';//If 3 or more are "-", set "-"
						} else if(sumFieldID == 'C0500' && dashCount > 0){
							sum = 99;
						} else if(consideredMissingCount == 1 && missingOneFactor != null){
							sum = Math.round(sum * missingOneFactor);
						} else if(consideredMissingCount == 2 && missingTwoFactor != null){
							sum = Math.round(sum * missingTwoFactor);
						} else if(consideredMissingCount >= 3){
							if(sumFieldID == 'D0300'){
								sum = 99; // dashCount == termCount case handled above
							} else if(sumFieldID == 'D0600'){
								sum = '-';
							}
						}
					}
				}
				if(sumFieldID == 'D0300' || sumFieldID == 'D0600'){
					if(!isNaN(parseInt(sum, 10))){
						if((parseInt(sum, 10) < 10)){
							sum = "0" + sum;
						}
					}
				}
				if($('#'+sumFieldID).val() != sum.toString()){//compare as strings
					$('#'+sumFieldID).val(sum);
					$('#'+sumFieldID+'_display').fadeOut('fast').html('&#160;'+sum+'&#160;').fadeIn('slow');
					//since a change occurred, trigger any bound change events
					$('#'+sumFieldID).change();
				}
			});
		}
	});
}

function sumPhq2to9Score(phqFieldID, phqFieldIDs, missingOneFactor, missingTwoFactor){
	$(document).ready(function() {
			for (var i = 1, tfLen = phqFieldIDs.length; i < tfLen; i++) {
				$('#' + phqFieldIDs[i]).change(function () {
					var sum2 = 0;
					var sum9 = 0;
					var phq2Count = 0;
					var isPhq9 = false;
					var noResponseCount = 0;
					var missingCount = 0;
					var skippedCount = 0;
					var dashCount = 0;
					var blankCount = 0;
					var fieldValue = null;
					var questionKey = null;
					var termCount = phqFieldIDs.length;
					var d0100 = (document.getElementById('D0100') != null) ? document.getElementById('D0100').value : '';
					for(var j=0;j<termCount;j++) {
						questionKey = phqFieldIDs[j].toString();
						fieldValue = $('#' + phqFieldIDs[j]).val();
						if (questionKey == 'D0150A1' || questionKey == 'D0150B1') {
							if (fieldValue == '9') {
								noResponseCount++;
							}
						} else if (fieldValue == '') {
							blankCount++;
						} else if (fieldValue == '-') {
							dashCount++;
						} else if (fieldValue == '^') {
							skippedCount++;
						} else {
							if (questionKey == 'D0150A2' || questionKey == 'D0150B2') {
								if (fieldValue == '3' || fieldValue == '2') {
									isPhq9 = true;
								} else {
									phq2Count++;
								}
								sum2 += parseInt(fieldValue, 10);
							} else {
								sum9 += parseInt(fieldValue, 10);
							}
						}
					}
					var sum = sum2;
					if (noResponseCount == 2) {
						sum = '^';
					} else if (isPhq9 == true || phq2Count < 2) {
						missingCount = blankCount + dashCount + skippedCount;
						sum += sum9;
						if (missingCount > 0) {
							//special logic...
							if (dashCount == termCount || (d0100 == '-')) {
								sum = '-'; // If all "-", set "-"
							} else if (missingCount == 1 && missingOneFactor != null) {
								sum = Math.round(sum * missingOneFactor);
							} else if (missingCount == 2 && missingTwoFactor != null) {
								sum = Math.round(sum * missingTwoFactor);
							} else if (missingCount >= 3 && (d0100 == '1')) {
								sum = 99; // dashCount == termCount case handled above
							}
						}
						if (!isNaN(parseInt(sum, 10))) {
							if ((parseInt(sum, 10) < 10)) {
								sum = "0" + sum;
							}
						}
					}

					if ($('#' + phqFieldID).val() != sum.toString()) {//compare as strings
						$('#' + phqFieldID).val(sum);
						$('#' + phqFieldID + '_display').fadeOut('fast').html('&#160;' + sum + '&#160;').fadeIn('slow');
						//since a change occurred, trigger any bound change events
						$('#' + phqFieldID).change();
					}
				});
			}
	});
}

function setupNoneOfTheAboveRule(questionID, noaQList){
	var set = $([]);

	if (noaQList != null && noaQList != undefined && noaQList.length != 0)
	{
		// Creates a list of question affected by noa. Exact list is pre-determined in controller based on
		// NOA ValidationRule(s).ValidationItem(s).
		var qList = noaQList.split(',');
		for (var i = 0; i < qList.length; i++) {
			set = set.add('#' + qList[i]);
		}
	}
	set.change(function(i){
		var setLength = set.size();
		var yesCount = 0;
		var noCount = 0;
		var unassessedCount = 0;
		var qVal;
		set.each(function(j){
			qVal = $(this).val();
			if(qVal == '1'){
				yesCount++;
			} else if(qVal == '0'){
				noCount++;
			} else if(qVal == '-'){
				unassessedCount++;
			}
		});
		var newVal = '';
		if((yesCount + noCount + unassessedCount) == setLength){
			if(noCount == setLength){
				newVal = '1';
			} else if(yesCount == setLength){
				newVal = '0';
			} else if(yesCount == 0 && unassessedCount >= 1){
				newVal = '-';
			} else if(yesCount > 0){
				newVal = '0';
			}
		}
		var oldVal = $('#' + questionID).val();
		if(oldVal != newVal){
			$('#' + questionID).val(newVal);
			if(newVal == '1')
			{
				$('#' + questionID + '_noneoftheabove').addClass('selected');
				$('#' + questionID + '_notassessed').removeClass('selected');
			}
			else if(newVal == '-')
			{
				$('#' + questionID + '_noneoftheabove').removeClass('selected');
				$('#' + questionID + '_notassessed').addClass('selected');
			}
			else{
				$('#' + questionID + '_noneoftheabove').removeClass('selected');
				$('#' + questionID + '_notassessed').removeClass('selected');
			}
			$('#' + questionID).change();//trigger any bound change events
		}
	});
	//auto-clear "above" questions when a None Of The Above question button is un-selected by *explicitly* clicking it
	$('#' + questionID + '_noneoftheabove').click(function(){
		var newVal = $('#' + questionID).val();
		if(newVal == ''){
			set.each(function(){
				setQuestionValue($(this).attr('id'), '');
			});
		}
	});
	$('#' + questionID + '_notassessed').click(function(){
		var newVal = $('#' + questionID).val();
		if(newVal == ''){
			set.each(function(){
				setQuestionValue($(this).attr('id'), '');
			});
		}
	});
}

function setupAutoClearResponseRequired(questionID){
	$('#'+questionID).bind('change.autoClear', function(){
		if($(this).val() != ''){
			var questionDiv = $('#'+questionID+'_wrapper');
			var errorDivs = questionDiv.find('div.errorheader');
			var responseRequiredFound = 0;
			var responseRequiredCleared = 0;
			errorDivs.each(function(i){
				if($(this).html().indexOf(' - response required') != -1){
					responseRequiredFound++;
					$(this).fadeOut('fast', function(){
						$(this).remove();
						resizeOverlays();
					});
					responseRequiredCleared++;
				}
			});
			//Remove this change handler once cleared, or if there are no "response required" errors
			if(responseRequiredFound == 0 || (responseRequiredFound == responseRequiredCleared)){
				$('#'+questionID).unbind('change.autoClear');
			}
		}
	});
}

function disableQuestion(questionID, disabledBy){
	if(!isQuestionDisabledBy(questionID, disabledBy)){
		var questionDiv = $('#'+questionID+'_wrapper');
		if(questionDiv.length > 0){
			//only "physically" disable the question content once
			if(!isQuestionDisabled(questionID)){
				//force all input to readonly
				var questionContentDiv = questionDiv.find('.question_content');
				var inputObjs = questionContentDiv.find('input');
				inputObjs.each(function(){
					$(this).attr('readonly', 'readonly');
					$(this).css('color', $(this).css('background-color'));
				});
				if(questionDiv.attr('data-questiontype') == 'dte'){
					questionContentDiv.find('input.datewidget, input.validdatewidget').datepicker('disable');
				}
				if(questionDiv.attr('data-questiontype') == 'sum'){
					var questionSumDiv = questionContentDiv.find('div.question_sum_display');
					questionSumDiv.css('color', questionSumDiv.css('background-color'));
				}
				//disable links
				questionContentDiv.find('a').each(function(){
					if(typeof(this.onclick) != 'undefined'){
						$(this).data('origonclick', this.onclick);
						this.onclick = function(){};
					}
				});
			}

			//if this question is not already disabled, initialize a map to document which questions are disabling this one
			if(typeof(questionDiv.data('disabledBy')) == 'undefined' || !questionDiv.data('disabledBy')){
				questionDiv.data('disabledBy', {});
			}
			if(disabledBy instanceof Array){
				var disabledByQuestion;
				for(var i=0;i<disabledBy.length;i++){
					disabledByQuestion = disabledBy[i];
					questionDiv.data('disabledBy')[disabledByQuestion] = true;
				}
			} else if(typeof(disabledBy) == 'string'){
				questionDiv.data('disabledBy')[disabledBy] = true;
			}
			var disabledByQuestionMap = questionDiv.data('disabledBy');
			var disabledByQuestionList = [];
			for(var i in disabledByQuestionMap){
				disabledByQuestionList.push(i);
			}
			questionDiv.addClass('disabled_question');
			//add overlay div...
			var questionContentDiv = questionDiv.find('.question_content');

			var offset = questionContentDiv.offset();

			var msg = generateDisabledMessage(questionID, disabledByQuestionList);
			//remove any existing disabled messages
			questionContentDiv.find('span.question_content_overlay_note').remove();
			questionContentDiv.find('div.question_content_overlay').remove();
			//apply new disabled messages
			questionContentDiv.append('<div class="question_content_overlay" style="position:absolute;top:' + offset.top + 'px;left:' + offset.left + 'px;width:' + questionContentDiv.outerWidth(true) + 'px;height:' + questionContentDiv.outerHeight(true) + 'px;"> </div>');
			questionContentDiv.append('<span class="question_content_overlay_note" style="top:' + offset.top + 'px;left:' + (offset.left + 50) + 'px;width:' + (questionContentDiv.outerWidth(true) - 100) + 'px;">' + msg + '</span>');
		}
	}
}

function generateDisabledMessage(questionID, disabledByQuestionList){
	var section = getSectionFromQuestionKey(questionID);
	var msg = '<span>Question ' + questionID + ' disabled by another question';
	if(disabledByQuestionList.length > 0){
		disabledByQuestionList.sort();
		msg = '<span>Question ' + questionID + ' disabled by question';
		if(disabledByQuestionList.length > 1){
			msg += 's';
		}
		var disabledByQuestionID;
		for(var i=0;i<disabledByQuestionList.length;i++){
			disabledByQuestionID = disabledByQuestionList[i];
			if(getSectionFromQuestionKey(disabledByQuestionID) == section){
				msg += ' <a href="javascript:;" onclick="window.scrollTo(0, ($(\'#' + disabledByQuestionID + '_wrapper\').offset()[\'top\']) - 100);" title="Jump to ' + disabledByQuestionID + '">' + disabledByQuestionID + '</a>';
			} else {
				msg += ' <span>' + disabledByQuestionID + '</span>';
			}
				if(i != (disabledByQuestionList.length -1)){
				msg += ' |';
			}
		}
	}
	msg += '</span>';
	return msg;
}

function enableQuestion(questionID, enabledBy){
	if(isQuestionDisabledBy(questionID, enabledBy)){
		var questionDiv = $('#'+questionID+'_wrapper');

		var questionContentDiv = questionDiv.find('.question_content');

		//can this question really be enabled?
		var disabledByQuestionMap = questionDiv.data('disabledBy');
		var disabledByQuestionList = [];
		for(var i in disabledByQuestionMap){
			if(i == enabledBy){
				//clear disabler
				if(typeof(questionDiv.data('disabledBy')[enabledBy]) != 'undefined'){
					questionDiv.data('disabledBy')[enabledBy] = null;
				}
			} else {
				if(disabledByQuestionMap[i]){
					disabledByQuestionList.push(i);
				}
			}
		}
		if(disabledByQuestionList.length == 0 || (enabledBy == null)){
			var inputObjs = questionContentDiv.find('input');
			inputObjs.each(function(){
				$(this).removeAttr('readonly');
			});

			if(questionDiv.attr('data-questiontype') == 'dte'){
				questionContentDiv.find('input.datewidget, input.validdatewidget').datepicker('enable');
			}
			//re-enable links
			questionContentDiv.find('a').each(function(){
				if(typeof($(this).data('origonclick')) != 'undefined'){
					this.onclick = $(this).data('origonclick');
				}
			});

			if($('#'+questionID).val() == '^'){
				$('#'+questionID).val('');//was disabled, remove the '^' symbol
			}
			inputObjs.each(function(){
				$(this).css('color', '#000');
			});
			if(questionDiv.attr('data-questiontype') == 'sum'){
				var questionSumDiv = questionContentDiv.find('div.question_sum_display');
				questionSumDiv.css('color', '#000');
			}

			questionDiv.removeClass('disabled_question');
			//remove overlay div...
			questionDiv.find('.question_content_overlay_note').remove();
			questionDiv.find('.question_content_overlay').remove();
			$('#'+questionID).change();//trigger chained events (e.g. if re-enabling this question should re-enable others
		} else {
			var msg = generateDisabledMessage(questionID, disabledByQuestionList);
			questionDiv.find('.question_content_overlay_note').html(msg);
		}
	}
}

function isQuestionDisabled(questionID){
	var questionDiv = $('#'+questionID+'_wrapper');
	var disabledByQuestionMap = questionDiv.data('disabledBy');
	if(typeof(disabledByQuestionMap) != 'undefined'){
		for(var i in disabledByQuestionMap){
			if(disabledByQuestionMap[i] == true){
				return true;
			}
		}
	}
	return false;
}

function isQuestionDisabledBy(questionID, disabledBy){
	var questionDiv = $('#'+questionID+'_wrapper');
	var disabledByQuestionMap = questionDiv.data('disabledBy');
	if(typeof(disabledByQuestionMap) != 'undefined' && disabledByQuestionMap != null){
		if(typeof(disabledByQuestionMap[disabledBy]) != 'undefined' && disabledByQuestionMap[disabledBy] == true){
			return true;
		}
	}
	return false;
}

function setQuestionValue(questionID, value){
	var questionWrapper = $('#' + questionID + '_wrapper');
	var questionType = questionWrapper.attr('data-questiontype');
	var field = $('#' + questionID);
	if(field && value != '!^'){
		var oldVal = field.val();
		if(oldVal != value){
			if(questionType == 'sum' && value != '^'){
				//ignore, let auto-sum calculations set this value, however if told to skip, set value and trigger any events
			} else if(questionType == 'rad' || questionType == 'chk'){
				var answers = questionWrapper.find('ul').find('a');
				answers.each(function(i){
					$(this).removeClass('selected');
					if($(this).attr('data-value') == value){
						$(this).addClass('selected');
					}
				});
				field.val(value);
				field.change();//trigger any bound change events (e.g. enable/disable question)
			} else if(questionType == 'dte') {
				//selectively toggle associated buttons and set value of the date input widget 
				var toggles = questionWrapper.find('a');
				toggles.each(function(i){
					$(this).removeClass('selected');
				});
				if(value == '-'){
					$('#notassessed_'+questionID).addClass('selected');
					$('#fake_'+questionID).val(value);
				}
				else if(value == '--------'){
					$('#ongoing_'+questionID).addClass('selected');
					$('#fake_'+questionID).val(value);
				}
				else if(value == '99999999'){
					$('#notreceived_'+questionID).addClass('selected');
					$('#fake_'+questionID).val(value);
				}

				field.val(value);
				field.change();//trigger any bound change events (e.g. enable/disable question)
			} else {
				//num, txt
				field.val(value);
				field.change();//trigger any bound change events (e.g. enable/disable question)
			}
		}
	}
}

function signQuestion(questionID){
	var questionDiv = $('#'+questionID+'_wrapper');
	if(questionDiv.length > 0){
		//force all input to readonly
		var questionContentDiv = questionDiv.find('.question_content');
		var inputObjs = questionContentDiv.find('input');
		inputObjs.each(function(){
			$(this).attr('readonly', 'readonly');
		});
		var selectObjs = questionContentDiv.find('select');
		selectObjs.each(function(){
			$(this).attr('disabled', 'disabled');
		});
		if(questionDiv.attr('data-questiontype') == 'dte'){
			questionContentDiv.find('input.datewidget, input.validdatewidget').datepicker('disable');
		}
		//disable response links
		questionContentDiv.find('a').not('.jumplink').each(function(){
			if(typeof(this.onclick) != 'undefined' && !isQuestionDisabled(questionID)){
				$(this).data('origonclick', this.onclick);
				this.onclick = function(){};
			}
		});
	}
}

function confirmUnSignQuestion(questionID){
	if(confirm('Are you sure you want to un-sign question ' + questionID +  '?')){
		unSignQuestion(questionID);
	}
}

function unsignCopiedQuestions(copiedQuestionKeys){
	if(confirm('To unsign an interview item that was copied from a prior assessment, all of your copied responses for this interview will be unsigned. Are you sure you want to unsign all copied interview responses for this section?')){
		unsignCopied = "Y";
		for(var i = 0; i < copiedQuestionKeys.length; i++){
			unSignQuestion(copiedQuestionKeys[i]);
		}
	}
}

function unSignQuestion(questionID){
	var questionWrapper = $('#' + questionID + '_wrapper');
	var signDiv = questionWrapper.find('div.signed_response');
	if(signDiv){
		enableSignedQuestion(questionID);
		var signDivMsg = signDiv.find('#unsign_' + questionID);
		signDivMsg.remove();
		signDiv.removeClass('signed_response');
		resizeOverlays();
	}
	$('#' + questionID).unbind('change.unSign');//signed questions can only ever be un-signed once
	$('#ack_' + questionID).val('Y'); //once a question is unsigned we need to put it in the acknowledged state
}

function enableSignedQuestion(questionID){
	var questionDiv = $('#'+questionID+'_wrapper');
	var questionContentDiv = questionDiv.find('.question_content');

	var inputObjs = questionContentDiv.find('input');
	inputObjs.each(function(){
		$(this).removeAttr('readonly');
	});
	var selectObjs = questionContentDiv.find('select');
	selectObjs.each(function(){
		$(this).removeAttr('disabled');
	});
	if(questionDiv.attr('data-questiontype') == 'dte'){
		questionContentDiv.find('input.datewidget, input.validdatewidget').datepicker('enable');
	}
	//re-enable links
	questionContentDiv.find('a').not('.jumplink').each(function(){
		if(typeof($(this).data('origonclick')) != 'undefined'){
			this.onclick = $(this).data('origonclick');
		}
	});
}

function handleDateChange(questionID, setAsSelected){
	var questionWrapper = $('#' + questionID + '_wrapper');
	var toggles = questionWrapper.find('a');
	toggles.each(function(i){
		$(this).removeClass('selected');
	});
	if(setAsSelected){
		$('#'+setAsSelected).addClass('selected');
	}
	$('#'+questionID).change();//trigger chained events
}

function toggleOngoing(linkID, questionID){
	if($('#'+questionID).val() == '--------'){
		$('#fake_'+questionID).val('');
		$('#'+questionID).val('');
		handleDateChange(questionID);
	} else {
		$('#fake_'+questionID).val('--------');
		$('#'+questionID).val('--------');
		handleDateChange(questionID, linkID);
	}
}

function toggleNotApplicable(linkID, questionID)
{
	if($('#'+questionID).val() == '^'){
		$('#fake_'+questionID).val('');
		$('#'+questionID).val('');
		handleDateChange(questionID);
	} else {
		$('#fake_'+questionID).val('');
		$('#'+questionID).val('^');
		handleDateChange(questionID, linkID);
	}
}

function toggleNotAssessed(linkID, questionID){
	if($('#'+questionID).val() == '-'){
		$('#fake_'+questionID).val('');
		$('#'+questionID).val('');
		handleDateChange(questionID);
	} else {
		$('#fake_'+questionID).val('-');
		$('#'+questionID).val('-');
		handleDateChange(questionID, linkID);
	}
}

function toggleNotReceived(linkID, questionID){
	if($('#'+questionID).val() == '99999999'){
		$('#fake_'+questionID).val('');
		$('#'+questionID).val('');
		handleDateChange(questionID);
	} else {
		$('#fake_'+questionID).val('99999999');
		$('#'+questionID).val('99999999');
		handleDateChange(questionID, linkID);
	}
}

$(document).ready(function(){
	//setup number fields...
	$('input.valid_number').bind('keypress', function(e){
		if(e.which == 46 && $(this).attr('data-allowdecimal') == 'true'){
			return true;
		}
		if(e.which == 45){
			$(this).val('');//clear to set a single dash (allowed)
			return true;
		} else {
			var isValid = ((e.which>=48 && e.which<=57) || e.which == 8 || e.which == 0);
			if(isValid){
				if($(this).val() == '-'){
					$(this).val('');
				}
				return true;
			}
			return false;
		}
	});
	$('input.valid_number').change(function(e){
		var val = $(this).val();
		var errors = [];
		if(val == '' || val == '^' || val == '-'){
			//clear any inline question errors...
			$(this).parent().find('div.errorheader').remove();
			return;
		}
		var allow99 = $(this).attr('data-enable99');
		if(allow99 == 'true' && val == '99'){
			//clear any inline question errors...
			$(this).parent().find('div.errorheader').remove();
			return;
		}
		var validNum = !/^\s*$/.test(val) && !isNaN(val);
		if(!validNum){
			errors.push('Value must be a valid number.');
		}
		var allowDecimal = $(this).attr('data-allowdecimal');
		var formattedNum = '';
		var valAsNum = parseInt(val, 10);
		if(allowDecimal == 'true'){
			valAsNum = parseFloat(val);
			//Currently if a decimal is allowed... only 1 decimal place is acceptable
			var re = new RegExp("^$|^[1-9]?[0-9]$|^[1-9]?[0-9]\.[0-9]?$|^\.[0-9]$","gi");
			if(!re.test(val)){
				errors.push('Value must be a number between (0 and 99.9) in the format XX.Y');
			} else {
				if(!isNaN(valAsNum)){
					formattedNum = valAsNum.toString();
					if(formattedNum.indexOf('.') == -1){
						formattedNum += '.0';//e.g '5' to '5.0'
					} else if(formattedNum.indexOf('.') == 0){
						formattedNum += '.0';//e.g '.5' to '0.5'
					} else if(formattedNum.indexOf('.') == (formattedNum.length - 1)){
						formattedNum += '0';//e.g '5.' to '5.0'
					}
				}
			}
		}
		var min = $(this).attr('data-min');
		var max = $(this).attr('data-max');
		if(min != '' && valAsNum < min){
			errors.push('Value must be greater than or equal to ' + min + '.');
		}
		if(max != '' && valAsNum > max){
			errors.push('Value must be less than or equal to ' + max + '.');
		}
		//clear any inline question errors...
		$(this).parent().find('div.errorheader').remove();
		if(errors.length > 0){
			$(this).parent().prepend('<div class="errorheader">' + errors.join('<br/>') + '</div>');
			$(this).val('');//force reset
		} else {
			if(allowDecimal == 'true'){
				$(this).val(formattedNum);//force formatted
			}
			if(this.name=='J0600A'){
				formattedNum = valAsNum.toString();
				if(valAsNum < 10){
					formattedNum = "0" + formattedNum;
					$(this).val(formattedNum); //forced formatted
				}
			}
			return;
		}
	});
	//setup date fields...
	if($('input.datewidget, input.validdatewidget').length > 0){
		$('input.datewidget, input.validdatewidget').each(function(i){
			var altFieldID = $(this).attr('id').substr(5);
			//pull date from hidden field...
			var defaultDate = $('#'+altFieldID).val();
			if(defaultDate.length == 8){
				var prettyDate;
				if(defaultDate == '--------'){
					prettyDate = defaultDate;
				} else if(defaultDate == '99999999') {
					prettyDate = defaultDate;
				} else {
					prettyDate = defaultDate.substr(4,2) + '/' + defaultDate.substr(6,2) + '/' + defaultDate.substr(0,4);
				}
				$(this).val(prettyDate);
			} else if(defaultDate.length == 6){
				var prettyDate = defaultDate.substr(4,2) + '/' + defaultDate.substr(0,4);
				$(this).val(prettyDate);
			} else if(defaultDate.length == 4){
				var prettyDate = defaultDate.substr(0,4);
				$(this).val(prettyDate);
			} else if(defaultDate == '-'){
				$(this).val('-');
			}
			$(this).datepicker({
				changeMonth:true,
				changeYear:true,
				yearRange:'c-125:c+10',
				onSelect:function(dateText, inst){
					handleDateChange(altFieldID);
				},
				duration:'fast',
				dateFormat:'mm/dd/yy',
				altField:'#'+altFieldID,
				altFormat:'yymmdd',//this is actually YYYYMMDD format
				appendText:'&#160;(mm/dd/yyyy)'
			});
			if($(this).attr('data-mindate') != null && $(this).attr('data-mindate') != ''){
				$(this).datepicker('option', 'minDate', new Date($(this).attr('data-mindate')));
			}
			//this version of the UI doesn't automatically populate the altField if the user types a date, thus we'll hook the event in manually
 			$(this).keyup(function(e){
				if(e.which == 109 || e.which == 189){
					if($(this).attr('data-fulldashenabled') != null && $(this).attr('data-fulldashenabled') == 'true'){
						if($(this).val() == '-'){
							$(this).val('--------');
							$('#'+altFieldID).val('--------');
						} else {
							$(this).val('-');
							$('#'+altFieldID).val('-');
						}
						$(this).datepicker('hide');
					} else if($(this).attr('data-unassessenabled') != null && $(this).attr('data-unassessenabled') == 'true'){
						//special case, user can set "-" for unaccessed. (some browsers differentiate between dash on the keyboard vs. dash on the number pad)
						$(this).val('-');
						$('#'+altFieldID).val('-');
						$(this).datepicker('hide');
					} else if($(this).attr('data-eightninesenabled') != null && $(this).attr('data-eightninesenabled') == 'true') {
						$(this).val('99999999');
						$('#' + altFieldID).val('99999999');
						$(this).datepicker('hide');
					} else {
						return false;
					}
				} else {
					var widget = $.data(this, 'datepicker');
	 				$.datepicker._setDateFromField(widget);
	 				$.datepicker._updateAlternate(widget);
					//_updateAlterate() only updates valid dates.  Since MDS3 supports partial dates, update those also
					var val = $(this).val();
					if(val.length == 4){
						$('#'+altFieldID).val(val);
					} else if(val.length == 7){
						$('#'+altFieldID).val(val.substr(3,4) + '' + val.substr(0,2));
					}
				}
				if($(this).attr('data-unassessenabled') != null && $(this).attr('data-unassessenabled') == 'true'){
					if($(this).val() == '-'){
						$('#notassessed_' + altFieldID).addClass('selected');
					} else {
						$('#notassessed_' + altFieldID).removeClass('selected');
					}
				}
				if($(this).attr('data-fulldashenabled') != null && $(this).attr('data-fulldashenabled') == 'true'){
					if($(this).val() == '--------'){
						$('#ongoing_' + altFieldID).addClass('selected');
					} else {
						$('#ongoing_' + altFieldID).removeClass('selected');
					}
				}
				if ($(this).attr('data-eightninesenabled') != null && $(this).attr('data-eightninesenabled') == 'true') {
					if ($(this).val() == '99999999') {
						$('#notreceived_' + altFieldID).addClass('selected');
					} else {
						$('#notreceived_' + altFieldID).removeClass('selected');
					}
				}
			});
			$(this).blur(function(){
				//var widget = $.data(this, 'datepicker');
				//calling the following 2 methods stops the event propagation causing next/prev month navigation via the arrows to fail thus we'll do it by hand
				//$.datepicker._setDateFromField(widget);
				//$.datepicker._updateAlternate(widget);
				//_updateAlterate() only updates valid dates.  Since MDS3 supports partial dates, update those also

				//check if date input is valid
				var isValid = false;
				var dateStr = '';
				var val = $(this).val();

				//User may have entered date in the following formats (depending if spec allows it):
				//  mm/dd/yyyy
				//  mm/yyyy
				//  yyyy
				//  -
				//  --------
				// 99999999 (not yet received)
				var unassessEnabled = ($(this).attr('data-unassessenabled') != null && $(this).attr('data-unassessenabled') == 'true');
				var fulldashEnabled = ($(this).attr('data-fulldashenabled') != null && $(this).attr('data-fulldashenabled') == 'true');
				var eightninesenabled = ($(this).attr('data-eightninesenabled') != null && $(this).attr('data-eightninesenabled') == 'true');
				var yearOnlyEnabled = ($(this).attr('data-yearonlyenabled') != null && $(this).attr('data-yearonlyenabled') == 'true');
				var monthYearOnlyEnabled = ($(this).attr('data-monthyearonlyenabled') != null && $(this).attr('data-monthyearonlyenabled') == 'true');

				//clear any inline question errors...
				$(this).parent().find('div.errorheader').remove();
				var yearStr,yearNum,monthStr,monthNum,dayStr,dayNum,dateParts,daysInMonth = null;

				//handle easy cases first
				if(val == ''){
					isValid = true;//handle popup calendar when it causes blur event
				} else if(val == '-' && unassessEnabled){
					isValid = true;
				} else if(val == '--------' && fulldashEnabled){
					isValid = true;
				} else if(val.length == 4 && yearOnlyEnabled){
					yearNum = parseInt(val, 10);
					if(!isNaN(yearNum) && (yearNum >= 1870 && yearNum <= 9999)){
						isValid = true;
					}
				} else if (val == '99999999' && eightninesenabled) {
					isValid = true;
				}  else if(val.length <= 7 && monthYearOnlyEnabled){
					dateParts = val.split('/');
					if(dateParts.length == 2){
						monthNum = parseInt(dateParts[0],10);
						yearNum = parseInt(dateParts[1],10);
						if(!isNaN(yearNum) && (yearNum >= 1870 && yearNum <= 9999)){
							if(!isNaN(monthNum) && (monthNum >= 1 && monthNum <= 12)){
								isValid = true;
							}
						}
					}
				} else {
					//must be a valid date
					dateParts = val.split('/');
					if(dateParts.length == 3){
						monthNum = parseInt(dateParts[0],10);
						dayNum = parseInt(dateParts[1],10);
						yearNum = parseInt(dateParts[2],10);
						if(!isNaN(yearNum) && (yearNum >= 1870 && yearNum <= 9999)){
							if(!isNaN(monthNum) && (monthNum >= 1 && monthNum <= 12)){
								daysInMonth = 32 - new Date(yearNum, (monthNum-1), 32).getDate();//month is zero-indexed in date constructor
								if(!isNaN(dayNum) && (dayNum >= 1 && dayNum <= daysInMonth)){
									isValid = true;
								}
							}
						}
					}
				}

				//if valid, update hidden field, otherwise show error
				if(!isValid){
					$(this).parent().prepend('<div class="errorheader">Date: ' + val + ' is not a valid date</div>');
					$('#'+altFieldID).val('');
				} else {
					//is valid, populate hidden field
					if(monthNum != null){
						monthStr = (monthNum < 10) ? '0' + monthNum : '' + monthNum;
					}
					if(dayNum != null){
						dayStr = (dayNum < 10) ? '0' + dayNum : '' + dayNum;
					}
					if(val == '' || val == '-' || val == '--------' || val == '99999999'){
						$('#'+altFieldID).val(val);
					} else if(val.length == 4){
						$('#'+altFieldID).val(val);
					} else if(val.length <= 7){
						$('#'+altFieldID).val('' + yearNum + monthStr);
					} else if(val.length >= 8 && val.length <= 10){
						$('#'+altFieldID).val('' + yearNum + monthStr + dayStr);
					}
				}
			});
			$(this).change(function(){
				$('#'+altFieldID).change();//trigger any bound change events (for the hidden field)
			});
		});
	}



	//bind change events for validation...
	for(var questionID in MDSQuestionValidationRules){
		$('#'+questionID).change(function(event){
			var questionID = $(this).attr('id');//re-acquire questionID in this scope
			var currentValue = $('#'+questionID).val();
			var questionRules = MDSQuestionValidationRules[questionID];
			var questionRuleTrigger = null;
			var triggerMin = null;
			var triggerMax = null;
			var triggerMatched = null;
			var questionRuleTriggerRangeDelimiter = ' thru ';
			var questionRulesLen = questionRules.length;
			var VALUE_EMPTY = 'sp';

			var questionRuleObj = null;
			//re-enable any non-applicable disabled questions
			for(var i=0;i<questionRulesLen;i++){
				triggerMatched = true;
				questionRuleObj = questionRules[i];
				questionRuleTrigger = questionRuleObj['trigger'];
				if(questionRuleTrigger == VALUE_EMPTY)
				{
					questionRuleTrigger = '';
				}
				if(questionRuleTrigger == '0000' && currentValue != ''){//exclude '' as it parses to zero.
					questionRuleTrigger = '0';
					if(!isNaN(parseInt(currentValue, 10))){
						currentValue = '' + parseInt(currentValue, 10);
					}
				}
				if(questionRuleTrigger.indexOf(questionRuleTriggerRangeDelimiter) != -1 && currentValue != ''){//exclude '' as it parses to zero.
					//testing against a range of values...
					triggerMin = parseInt(questionRuleTrigger.substr(0,questionRuleTrigger.indexOf(questionRuleTriggerRangeDelimiter)), 10);
					triggerMax = parseInt(questionRuleTrigger.substr((questionRuleTrigger.indexOf(questionRuleTriggerRangeDelimiter)) + questionRuleTriggerRangeDelimiter.length), 10);
					currentValueAsInt = parseInt(currentValue, 10);
					if((triggerMin >= currentValueAsInt) || (currentValueAsInt >= triggerMax)){
						triggerMatched = false;
					}
				} else if(questionRuleTrigger != currentValue){
					triggerMatched = false;
				}
				if(!triggerMatched){
					var affectedQuestionData = questionRuleObj['affected'];
					for(var affectedQuestionID in affectedQuestionData){
						if(getSectionFromQuestionKey(affectedQuestionID) == MDSCurrentSectionCode){
							if(affectedQuestionData[affectedQuestionID]['enabled'] == 'false'){
								//is or could be disabled, re-enable it (don't change any values)
								enableQuestion(affectedQuestionID, questionID);
							}
						}
					}
				}
			}
			//apply new validations...
			for(var i=0;i<questionRulesLen;i++){
				triggerMatched = false;
				questionRuleObj = questionRules[i];
				questionRuleTrigger = questionRuleObj['trigger'];
				if(questionRuleTrigger == VALUE_EMPTY)
				{
					questionRuleTrigger = '';
				}
				if(questionRuleTrigger == '0000' && currentValue != ''){//exclude '' as it parses to zero.
					questionRuleTrigger = '0';
					if(!isNaN(parseInt(currentValue, 10))){
						currentValue = '' + parseInt(currentValue, 10);
					}
				}
				if(questionRuleTrigger == currentValue){
					triggerMatched = true;
				} else if(questionRuleTrigger.indexOf(questionRuleTriggerRangeDelimiter) != -1 && currentValue != ''){//exclude '' as it parses to zero.
					//testing against a range of values...
					triggerMin = parseInt(questionRuleTrigger.substr(0,questionRuleTrigger.indexOf(questionRuleTriggerRangeDelimiter)), 10);
					triggerMax = parseInt(questionRuleTrigger.substr((questionRuleTrigger.indexOf(questionRuleTriggerRangeDelimiter)) + questionRuleTriggerRangeDelimiter.length), 10);
					currentValueAsInt = parseInt(currentValue, 10);
					if((triggerMin <= currentValueAsInt) && (currentValueAsInt <= triggerMax)){
						triggerMatched = true;
					}
				}
				if(triggerMatched){
					//trigger value matched...
					var affectedQuestionData = questionRuleObj['affected'];
					for(var affectedQuestionID in affectedQuestionData){
						if(getSectionFromQuestionKey(affectedQuestionID) == MDSCurrentSectionCode){
							//set value?...
							if(affectedQuestionData[affectedQuestionID]['value'] != '!^'){
								setQuestionValue(affectedQuestionID, affectedQuestionData[affectedQuestionID]['value']);
							}
							//disable it?...
							if(affectedQuestionData[affectedQuestionID]['enabled'] == 'false'){
								disableQuestion(affectedQuestionID, questionID);
							}
						}
					}
				}
			}
			return true;
		});
	}
});


function setupScrollTimer(position, delay){
	if(typeof(window._sectionnavigationtimer) != 'undefined'){
		clearTimeout('_sectionnavigationtimer');
	} else {
		$('#sectionnavigation').hide();
	}
	window._sectionnavigationtimer = setTimeout($('#sectionnavigation').css({'top':position+'px'}).show(), delay);

}

function reseatSectionNavigator(sectionNavigationElem){
	if(sectionNavigationElem.data('floating') != false){
		//reset
		//inside PCC framing... we need to move to the right
		sectionNavigationElem.css({'left':0});

		sectionNavigationElem.prependTo('#sectionnavigationanchor');
		sectionNavigationElem.css({'position':'relative'});
		sectionNavigationElem.data('floating', false);
	}
}

function setupCssStateChangeTimer(sectionNavigationElem, cssDisabledTriggered, delay, disabledFunc, enabledFunc){
	var triggerConditionMet;
	if (cssDisabledTriggered) {
		triggerConditionMet = !notCssDisabled(sectionNavigationElem);
	} else {
		triggerConditionMet = notCssDisabled(sectionNavigationElem);
	}

	if (triggerConditionMet) {
		if (cssDisabledTriggered && disabledFunc) {
			disabledFunc.call();
		} else if (!cssDisabledTriggered && enabledFunc) {
			enabledFunc.call();
		}
		cssDisabledTriggered = !cssDisabledTriggered;
	}
	// Reschedule ourself.
	window._sectioncssdisabledtimer = setTimeout(function(){
		setupCssStateChangeTimer(sectionNavigationElem, cssDisabledTriggered, delay, disabledFunc, enabledFunc);
	}, delay);

}


function notCssDisabled(sectionNavigationElem){
	var myElem = sectionNavigationElem || $('#sectionnavigation');
	var cssEnabledAttr = myElem.css('background-image');
	return cssEnabledAttr !== "none";
}

//handle window scrolling (adjust navigation bar position)
$(document).ready(function(){
	if($('#sectionnavigationanchor').length == 1){
		//force height of anchor box...
		$('#sectionnavigationanchor').css({'height':$('#sectionnavigation').outerHeight()+'px'});
		$('#sectionnavigation').data('floating',null);
		var positionFixedValue = 'fixed';
		var isIE = false;
		var sectionNavigationElem = $('#sectionnavigation');
		setupCssStateChangeTimer(sectionNavigationElem, true, 500, function() {
			$('#inProgress').hide();
			$('#questiontoolkit').hide();
		});

		$(window).scroll(function(){
			//jQuery 1.8.3 has a bug that causes "$(window).scrollTop();" to return zero
			var winScroll = document.body.scrollTop;
			if(winScroll == 0 && document.documentElement.scrollTop > 0){
				winScroll = document.documentElement.scrollTop;
			}
			var navAnchorPos = $('#sectionnavigationanchor').offset()['top'];
			var navAnchorLeft = $('#sectionnavigationanchor').offset()['left'];

			if(winScroll > navAnchorPos) {
				if (notCssDisabled(sectionNavigationElem)) {
					if (sectionNavigationElem.data('floating') != true) {
						//float it
						sectionNavigationElem.prependTo('body');
						sectionNavigationElem.css({'position': positionFixedValue});

						//inside PCC framing... we need to move to the right
						sectionNavigationElem.css({'left': navAnchorLeft});
						sectionNavigationElem.data('floating', true);
					}
				} else {
					reseatSectionNavigator(sectionNavigationElem);
				}
			} else {
				reseatSectionNavigator(sectionNavigationElem);
			}
		});
	}
});

$(document).ready(function(){
	$('input').one('change', function(){
		$('form').attr('data-isdirty','true');
	});
	
});

$(window).resize(function(){
	addThrottledEventHandler('mds3windowResize', 250, resizeOverlays);
});

function resizeOverlays(){
	$('div.disabled_question').each(function(i){
		//get overlay div...
		var questionContentDiv = $(this).find('.question_content');

		var offset = questionContentDiv.offset();

		//adjust sizing...
		questionContentDiv.find('div.question_content_overlay').css({'top':offset.top + 'px','left':offset.left + 'px','width':questionContentDiv.outerWidth(true) + 'px','height':questionContentDiv.outerHeight(true) + 'px'});
		questionContentDiv.find('span.question_content_overlay_note').css({'top':offset.top + 'px','left':(offset.left+50) + 'px','width':(questionContentDiv.outerWidth(true)-100) + 'px'});
	});
}

function setupC0500Button()
{
	$(document).ready(function(){
		var questionIds = ['C0200','C0300A','C0300B','C0300C','C0400A','C0400B','C0400C'];

		for(var i=0; i<questionIds.length; i++)
		{
			$('#'+questionIds[i]).change(function(){checkForNonSensical(questionIds);});
		}
	});
}

function checkForNonSensical(questionIds)
{
	var numZeros = 0;

	for(var i=0; i<questionIds.length; i++)
	{
		if($('#'+questionIds[i]).val()=='0')
		{
			numZeros++;
		}
	}

	if (numZeros>=4)
	{
		$('#C0500_override_disabled').hide();
        $('#C0500_override_enabled').show().animate({paddingLeft:20}, 500);
	}
	else
	{
		$('#C0500_override_enabled').css({paddingLeft:0}).hide();
	    $('#C0500_override_disabled').show();
	}

}
function autopopulateS2060()
{
	$(document).ready(function(){
		$('#S6230').change(function(){
			if($(this).val()== '0')
			{
				setQuestionValue('S2060Z', '1');
				
			}
		});
	});
}

/*
 * * if  S1100Z = None of above, Set S1100F1 and S100F2 = NA
 */
function autopopulateS1100F1andF1()
{
	$(document).ready(function(){
		$('#S1100Z').change(function(){
			if($(this).val()== '1')
			{
				setQuestionValue('S1100F1', 'NA');
				setQuestionValue('S1100F2', 'NA');
			}
		});
	});
}
/*
 * if  S1100F = 0 or Not Checked , Set S1100F1 and S100F2 = NA
 * if  S1100F = 1 or Checked and S1100F1 = 'NA', Set S1100F1 = blank 
 * if  S1100F = 1 or Checked and S1100F2 = 'NA', Set S1100F2 = blank 
 */
function clearS1100F1AndF2()
{
	$(document).ready(function(){
		var questionIds = ['S1100F1','S1100F2']; 
		var fieldValue = null;
		$('#S1100F').change(function(){
			if($(this).val()== '1')
			{  
				for(var i=0;i<questionIds.length;i++)
				{
				  fieldValue = $('#'+questionIds[i]).val();
				  if (questionIds[i] == 'S1100F1' && fieldValue =='NA')
				    setQuestionValue('S1100F1', '');
				  else if (questionIds[i] == 'S1100F2' && fieldValue =='NA')
					setQuestionValue('S1100F2', '');
			  }
			}
			else if($(this).val()== '0')
			{
				setQuestionValue('S1100F1', 'NA');
				setQuestionValue('S1100F2', 'NA');
				
			}
		});
	});
}


function overrideC0500(val)
{
	$('#C0500').val(val);
	$('#C0500_display').fadeOut('fast').html('&#160;'+val+'&#160;').fadeIn('slow');
}

/*
 * if A2400A = no and flag  = true SHOW A_SHORT stay group 
 * if A2400A = Yes and flag = true HIDE A_SHORT stay group 
 */
function toggleNonMcareShortSection(flag)
{
    $(document).ready(function(){
        $('#A2400A').change(function(){
       	 var specialGroup = $('#A_SHORTA_wrapper').parent().parent();
         if($(this).val()== '0' && flag)
         {  
           specialGroup.show();
         }
         else 
         {
            specialGroup.hide();
         }
        });
    });
}

/* Dropped from Phase I, implement with saving to profile in Phase II
$(document).ready(function(){
	$('div.questiongroup div.questiongrouptitle').each(function(i){
		//auto insert a chevron...
		var titleDiv = $(this).prepend('<div class="chevron expanded"></div>');
		var arrowDiv = titleDiv.find('div.chevron');
		titleDiv.toggle(
			function(){
				arrowDiv.removeClass('expanded');
				arrowDiv.addClass('collapsed');
				arrowDiv.parent().parent().find('div.questiongroupbody').slideUp('fast');
				return false;
			},
			function(){
				arrowDiv.removeClass('collapsed');
				arrowDiv.addClass('expanded');
				arrowDiv.parent().parent().find('div.questiongroupbody').slideDown('fast');
				return false;
			}
		);
	});
});
*/
