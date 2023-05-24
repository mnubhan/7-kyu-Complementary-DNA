function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

const DNAStrand= dna =>{
    return dna.split("").map(e=>{
        switch(e){
            case "A":
                e="T"
                break;
            case "T":
                e="A"
                break;
            case "G":
                e="C"
                break;
            case "C":
                e="G"
                break
        }
     return e
    }).join("")
}

function DNAStrand(dna){
  var obj = {"A":"T","T":"A","C":"G","G":"C"}
  return dna.replace(/[ATCG]/g,x => obj[x])
}
