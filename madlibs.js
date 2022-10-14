const submitMadlibs = (event) => {
    alert('hey!');
    event.preventDefault();

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = `<h3>My Completed Story:</h3>
    <p>My name is <span class="inserted-text">${userSubmission.proper_noun_1}</span> and I have known <span class="inserted-text">${userSubmission.proper_noun_2}</span> for <span class="inserted-text">${userSubmission.quantity}</span> years. I <span class="inserted-text">${userSubmission.verb1}</span> all the way from <span class="inserted-text">${userSubmission.noun1}</span> to celebrate today. I am so <span class="inserted-text">${userSubmission.adjective1}</span> for the parents. My best advice? Don't forget to <span class="inserted-text">${userSubmission.verb2}</span> before you <span class="inserted-text">${userSubmission.verb3}</span> and <span class="inserted-text">${userSubmission.verb4}</span> after the <span class="inserted-text">${userSubmission.noun2}</span>. Daddy you should always <span class="inserted-text">${userSubmission.verb5}</span> mommy's <span class="inserted-text">${userSubmission.noun3}</span> and Mommy, you should always <span class="inserted-text">${userSubmission.verb6}</span> daddy's <span class="inserted-text">${userSubmission.noun4}</span>. You are going to be the <span class="inserted-text">${userSubmission.adjective2}</span> parents ever! Love, <span class="inserted-text">${userSubmission.name}</span>.</p>`;
    
    
}


function createParagraph(){
    var wordOne = document.getElementById("proper_noun_1").value;
    var wordTwo = document.getElementById("proper_noun_2").value;

    var paragraph = "<p>THis is the begininning of our Madlib " + wordOne + " and th"

    document.getElementById("completed-story").innerHTML = paragraph;
}



