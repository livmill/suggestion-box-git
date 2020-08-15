var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "python"
words[2] = "javascript"
words[3] = "html"
words[4] = "figma"
words[5] = "swift"
words[6] = "adobe photoshop"
words[7] = "adobe lightroom"
words[8] = "adobe XD"
words[9] = "procreate"
words[10] = "sketch"
words[11] = "principle"
words[12] = "oregami"
words[13] = "webflow"
words[14] = "personal website"
words[15] = "cofolios"
words[16] = "portfolio"
words[17] = "resume"
words[18] = "c++"
words[19] = "eecs 183 project"
words[20] = "art"
words[21] = "job"
words[22] = "strapp.ai"
words[23] = "clubs in the fall"
words[24] = "calendar"
words[25] = "adobe creative jams"
words[26] = "daily UI challenge"
words[27] = "udemy"
words[28] = "a side project"

function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}