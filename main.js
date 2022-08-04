//The first two functions below were given out by Codecademy for the project
// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//All code below this point is my work to complete the project
const pAequorFactory = (orgNum, dnaStrand) => {
  return {
    specimenNum: orgNum,
    dna: dnaStrand,

    mutate() {
      let newBase = returnRandBase();
      let mutatedBase = Math.floor(Math.random() * 15)
      while (newBase === dnaStrand[mutatedBase]) {
        newBase = returnRandBase();
      };
      dnaStrand[mutatedBase] = newBase;
    },

    compareDNA(pAequor) {
      let duplicateCount = 0;
      for (i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          duplicateCount++;
        }
      };
      let duplicatePcnt = Math.floor((duplicateCount / this.dna.length) * 100);
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${duplicatePcnt}% DNA in common.`);
    },

    willLikelySurvive() {
      let goodBases = ['C', 'G'];
      let goodDNA = this.dna;
      goodDNA = goodDNA.filter(base => goodBases.includes(base));
      console.log(`This specimen contains about ${Math.floor((goodDNA.length / this.dna.length) * 100)}% 'C' and 'G' bases.`);
      return ((goodDNA.length / this.dna.length) >= .6) ? true : false;
    }

  };
};

const organismArray = [];
for (i = 1; i <= 30; i++) {
  organismArray.push(pAequorFactory(i, mockUpStrand()))
};
console.log(organismArray);
