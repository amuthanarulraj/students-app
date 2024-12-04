import { render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw';
import App from './App'

describe('App', () => {

    beforeAll(() => {
        http.get('http://localhost:3002/students', () => {
            // ...and respond to them using this JSON response.
            return HttpResponse.json([{
              id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
              firstName: 'John',
              lastName: 'Maverick',
              email: "nneen@gmail.com"
            }])
          })
    })

    beforeEach(() => {
        // console.log('Code to execute before each test');
    })

    afterEach(() => {
        // console.log('Code to execute after each test');
    })

    it('renders the App component', () => {
        const {container } = render(<App />)
        const titleEle = container.querySelector('[data-testid=appbar-title]');
        console.log(titleEle?.textContent?.trim());
        expect(titleEle?.textContent?.trim()).toBe('appbar.title');
        // screen.debug();
    })
    it('renders the App component 2', () => {
        const {container } = render(<App />)
        // container.querySelector()
        screen.debug();
    })
})