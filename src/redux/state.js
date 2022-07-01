import ava from "./res/ava2.jpg"

let state = {
  headerPage: {
    selected: {
      name: 'posts',
      link: '/'
    },
    headerLinks: [
      {
        name: 'posts',
        link: '/'
      },
      {
        name: 'education',
        link: '/education'
      },
      {
        name: 'work',
        link: '/work'
      },
      {
        name: 'sport',
        link: '/sport'
      },
      {
        name: 'new',
        link: '/new'
      },
    ]
  },
  postsPage: {
    profile: {
      name: 'Ivan Ivanov',
      age: '20',
      city: 'Kazan',
      photo: ava,
    },
    posts: [
      {
        title: 'Bla Bla Bla',
        date: '02.07.2022',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        title: 'Bla Bla Bla',
        date: '02.07.2022',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      },
      {
        title: 'Bla Bla Bla',
        date: '02.07.2022',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      }
    ]
  }
}

export default state;