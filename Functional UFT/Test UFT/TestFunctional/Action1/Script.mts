'Global Datasheet Configuration
Datatable.ImportSheet "C:\Users\kathiraven\Desktop\Test UFT\FunctionalTesting.xlsx", 1, "Global"

'Assign n parameter to number of row counts from datasheet
n = datatable.GetSheet("Global").GetRowCount

'Define number of iteration based on number of records
For i = 1 To n
Datatable.SetCurrentRow(i)

'Simple Function Library
Call validationmessage()


SystemUtil.Run "C:\Program Files (x86)\Internet Explorer\iexplore.exe" @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("CTOS Connect – Knowledge")_;_script infofile_;_ZIP::ssf51.xml_;_
Browser("CTOS Connect – Knowledge").Navigate "http://www.google.com/" @@ hightlight id_;_787098_;_script infofile_;_ZIP::ssf52.xml_;_

'Parameterize Data
Browser("CTOS Connect – Knowledge").Page("Google_2").WebEdit("q").Set datatable("SearchKeywords") @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("Google 2").WebEdit("q")_;_script infofile_;_ZIP::ssf53.xml_;_
Browser("CTOS Connect – Knowledge").Page("Google_2").WebEdit("q").Submit @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("Google 2").WebEdit("q")_;_script infofile_;_ZIP::ssf54.xml_;_

'Create Checkpoint
Browser("CTOS Connect – Knowledge").Page("Non Functional Testing").WebButton("st-toggle").Check CheckPoint("st-toggle") @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("Non Functional Testing").WebButton("st-toggle")_;_script infofile_;_ZIP::ssf65.xml_;_

Browser("CTOS Connect – Knowledge").Page("Functional testing - Google_2").Link("Images").Click @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("Functional testing - Google 2").Link("Images")_;_script infofile_;_ZIP::ssf57.xml_;_
Browser("CTOS Connect – Knowledge").Page("Functional testing - Google_3").Link("VIDEOS").Click @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("Functional testing - Google 3").Link("VIDEOS")_;_script infofile_;_ZIP::ssf59.xml_;_
Browser("CTOS Connect – Knowledge").Page("Functional testing - Google_4").Link("News").Click @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("Functional testing - Google 4").Link("News")_;_script infofile_;_ZIP::ssf60.xml_;_
Browser("CTOS Connect – Knowledge").Page("Certificate Error: Navigation").Sync @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("Certificate Error: Navigation")_;_script infofile_;_ZIP::ssf62.xml_;_
Browser("CTOS Connect – Knowledge").Page("Functional testing - Google_5").Link("Shopping").Click @@ hightlight id_;_Browser("CTOS Connect – Knowledge").Page("Functional testing - Google 5").Link("Shopping")_;_script infofile_;_ZIP::ssf64.xml_;_


Call CopyImagesToWord("C:\Users\kathiraven\Documents\SampleTestResults.docx") 

 
next
