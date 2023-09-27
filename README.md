# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


project features

Donation Tracking and Visualization:

The project allows users to make donations through a user-friendly interface. Donations are tracked and visualized using a pie chart in the Statistics section, providing users with a clear overview of their contributions.
Dynamic Card Display with Interactive UI:

The Home route features a dynamic card layout where users can view and interact with various donation options. The UI provides options for viewing details, and a "See More" button allows users to expand the list of available donations.
State Management and Data Persistence:

The project effectively manages state using React hooks like useState and useEffect. User interactions, such as clicking on donation cards, are tracked using localStorage, ensuring a seamless experience even after page reloads.


I managed my states this following ways:
..............................................................................
This property (Children) defines a nested set of routes. Each child route can have its own path and associated element. In this case, the child routes are defined for the paths '/', '/donation', '/statistics', and '/Cards/:id'.

===>In donation route-> donate and setDonate : This state manages an array called donate, representing the donation items. setDonate is the function used to update this state. It is initialized with an empty array using useState([])


===>  notFound and setNotFound: This state manages a boolean value notFound, which indicates whether no donation data was found. setNotFound is the function used to update this state. It is initialized with false using useState(false)

===> isShow and setIsShow: This state manages a boolean value isShow, which determines whether to show more donation items. setIsShow is the function used to update this state. It is initialized with false using useState(false).



