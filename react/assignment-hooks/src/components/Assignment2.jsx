import { useMemo, useState } from "react"


const words = ["hi", "my", "name","is", "for", "to", "random", "words"]
const TOTAL_LINES = 1000;
const ALL_WORDS = []

for(let i=0;i< TOTAL_LINES; i++){
    let sentence = ""
    for(let j=0; j<words.length;j++){
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence)
}

export function Assignment2(){
    const [sentences, setSentence] = useState(ALL_WORDS)
    const [filter, setFilter] = useState("")
    console.log("filter",filter)
    const filteredSentences = useMemo(()=>{
        return sentences.filter(x => x.includes(filter))
    },[filter, sentences])
    return(
        <>
        <input type="text" onChange={function(e){
            setFilter(e.target.value);
        }}></input>
        {filteredSentences.map(word => <div>
            {word}
        </div>)}
        </>
    )
} 