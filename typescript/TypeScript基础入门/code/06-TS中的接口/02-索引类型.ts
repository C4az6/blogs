// 通过interface来定义索引类型
interface IIndexLanguage {
  [index: number]: string
}

const frontLanguage: IIndexLanguage = {
  0: "HTML",
  1: "CSS",
  2: "JavaScript",
  3: "Vue",
  4: "React"
}

console.log(frontLanguage)

interface ILanguageYear {
  [name: string]: number
}
const languageYear: ILanguageYear = {
  "C": 1972,
  "Java": 1995,
  "JavaScript": 1996,
  "TypeScript": 2014
}
console.log(languageYear)