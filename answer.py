import string
def DNA_strand(dna):
    return dna.translate(string.maketrans("ATCG","TAGC"))
  
pairs = {'A':'T','T':'A','C':'G','G':'C'}
def DNA_strand(dna):
    return ''.join([pairs[x] for x in dna])

def DNA_strand(dna):
    new_dna=""
    for i in dna:
        match i:
            case "A":
                i="T"
                new_dna+=i
            case "T":
                i="A"
                new_dna+=i
            case "C":
               i="G" 
               new_dna+=i
            case "G":
                i="C"
                new_dna+=i
    return new_dna
