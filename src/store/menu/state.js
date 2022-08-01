export default {
  sideDrawer: [
    {
      category: 'joao',
      name: 'Jhonny Boy',
      icon: 'mdi-face',
      isFavorite: true,
    },
    {
      category: 'bruno',
      name: 'Brunecos',
      icon: 'mdi-flask',
      isFavorite: false,
    },
    {
      category: 'vitor',
      name: 'Vitebas',
      icon: 'mdi-space-invaders',
      isFavorite: false,
    },
    {
      category: 'abner',
      name: 'Billy',
      icon: 'mdi-message-alert',
      isFavorite: false,
    },
    {
      category: 'felipe',
      name: 'Felipolas',
      icon: 'mdi-share-variant',
      isFavorite: false,
    },
    {
      category: 'outros',
      name: 'Outros',
      icon: 'mdi-share-variant',
      isFavorite: false,
    },
  ]
    .sort((a, b) => a.category - b.category)
    .map((s, i) => ({ ...s, id: i })),
};
