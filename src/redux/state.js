import ava from "./res/ava2.png"

let state = {
  headerPage: {
    selected: {
      name: 'посты',
      link: '/'
    },
    headerLinks: [
      {
        name: 'посты',
        link: '/'
      },
      {
        name: 'учёба',
        link: '/education'
      },
      {
        name: 'работа',
        link: '/work'
      },
      {
        name: 'спорт',
        link: '/sport'
      },
      {
        name: 'новое',
        link: '/new'
      },
    ]
  },
  postsPage: {
    profile: {
      name: 'Алексей Мачихин',
      age: '20',
      city: 'Казань',
      photo: ava,
    },
    posts: [
      {
        title: 'Бла бла бла',
        date: '02.07.2022',
        text: 'Повседневная практика показывает, что социально-экономическое развитие представляет собой интересный эксперимент проверки форм воздействия. С учётом сложившейся международной обстановки, высокотехнологичная концепция общественного уклада предопределяет высокую востребованность распределения внутренних резервов и ресурсов. Как уже неоднократно упомянуто, элементы политического процесса лишь добавляют фракционных разногласий и в равной степени предоставлены сами себе.',
      },
      {
        title: 'Думаешь?',
        date: '02.07.2022',
        text: 'Повседневная практика показывает, что социально-экономическое развитие представляет собой интересный эксперимент проверки форм воздействия. С учётом сложившейся международной обстановки, высокотехнологичная концепция общественного уклада предопределяет высокую востребованность распределения внутренних резервов и ресурсов. Как уже неоднократно упомянуто, элементы политического процесса лишь добавляют фракционных разногласий и в равной степени предоставлены сами себе.',
      },
      {
        title: 'Бла бла бла',
        date: '02.07.2022',
        text: 'Повседневная практика показывает, что социально-экономическое развитие представляет собой интересный эксперимент проверки форм воздействия. С учётом сложившейся международной обстановки, высокотехнологичная концепция общественного уклада предопределяет высокую востребованность распределения внутренних резервов и ресурсов. Как уже неоднократно упомянуто, элементы политического процесса лишь добавляют фракционных разногласий и в равной степени предоставлены сами себе.',
      }
    ]
  }
}

export default state;