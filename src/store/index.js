import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: 
  [
    {
      name:"The office",
      description:"A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium. A mediocre paper company in the hands of Scranton, PA branch manager Michael Scott.",
      genre:"Comedy/sitcom",
      imgRef:"theOffice.jpg"
    },
    {
      name:"Avengers",
      description:"Earth's Mightiest Heroes stand as the planet's first line of defense against the most powerful threats in the universe. The Avengers began as a group of extraordinary individuals who were assembled to defeat Loki and his Chitauri army in New York City.",
      genre:"Action",
      imgRef:"avengers.jpg"
    },
    {
      name:"IT",
      description:"It tells the story of seven children in Derry, Maine who are terrorized by the eponymous being, only to face their own personal demons in the process. ",
      genre:"Horror",
      imgRef:"it.jpg"
    },
    {
      name:"Inside out",
      description:"Inside Out is a film about an 11 year old girl named Riley who moves across the country from Minnesota to San Francisco with her parents. Riley experiences a transformation in her mind and in who she is as a person as she tries to adjust to her new life in San Francisco and to the difficult process of growing up.",
      genre:"Kids",
      imgRef:"insideOut.jpg"
    },
    {
      name:"Soul",
      description:"Pixar's Soul is about a jazz pianist who has a near-death experience and gets stuck in the afterlife, contemplating his choices and regretting the existence that he mostly took for granted.",
      genre:"Kids",
      imgRef:"soul.jpg"
    },
    {
      name:"Up",
      description:"78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway. ... Determined to save his home and keep the promise he made to his wife, widower Carl Fredricksen embarks on a journey to the mysterious Paradise Falls in an airship of his own invention.",
      genre:"Kids",
      imgRef:"up.jpg"
    },
    {
      name:"The Witcher",
      description:"Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts. Henry Cavill stars in this epic series of monsters, magic and fate, based on writer Andrzej Sapkowski's fantasy books.",
      genre:"Action",
      imgRef:"theWitcher.jpg"
    },
    {
      name:"Spider-man: no way home",
      description:"The film explores the fallout of Spider-Man: Far From Home's (2019) mid-credits scene, in which Parker's identity as Spider-Man is exposed, and Parker is more pessimistic in contrast to previous Marvel Cinematic Universe (MCU) films.",
      genre:"Action",
      imgRef:"spiderman.jpg"
    },
  ],
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
