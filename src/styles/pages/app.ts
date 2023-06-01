import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',


  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    background: '#202024',
  },
})
