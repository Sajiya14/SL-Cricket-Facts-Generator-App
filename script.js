function generateFunFact() {
    const funFacts = [
        'Sri Lanka is one of the twelve nations that take part in Test cricket and one of the six nations that has won a cricket World Cup.',
        'Sri Lanka (then called Ceylon) was occupied by the British in 1796 and became a British colony in 1815.',
        'Sri Lanka Cricket, formerly the Board for Cricket Control in Sri Lanka (BCCSL), is the controlling body for cricket in Sri Lanka.',
        'Sri Lanka is a full member of the International Cricket Council and the Asian Cricket Council.',
        'Sri Lanka have won the Cricket World Cup in 1996,the ICC Champions Trophy in 2002 (Co-champions with India),the ICC World Twenty20 in 2014.',
    ];

    const randomIndex = Math.floor(Math.random() * funFacts.length);
    
    const randomFunFact = funFacts[randomIndex];
    const funFactsDisplay = funFacts.join('\n');
    document.getElementById('funFact').innerText = randomFunFact;

}
