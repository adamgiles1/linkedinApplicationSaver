#IN PROGRESS

#####things it does do
when a linkedin job application tab is open, the extension automatically injects a script into the apply button.
when the button is clicked, the script will save the job description and company.
creates an html file with the above information, but it does NOT save it anywhere. see issues.

#####issues
It is very difficult to get a chrome extension to save data to the computer long term. There is a couple of different ways of storing data, such as cookies and chrome has a storage api, but both do not have the capacity to hold the .html files of the job descriptions
if the user does not extend the job description on the page, then this extension will only save the small amount of text that displays by default. When I looked at the networking, it doesn't seem to make an api call when you extend the job description, so that implies
that the data is probably stored somewhere, I just need to find out where. The data has to come from some api at some point, so I might be able to just make a second call to it using the same parameters as last time.