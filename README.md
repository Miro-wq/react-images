# Image Search Application, code refactoring using React hooks. 

## Description 
> This project is an image search application built with React, leveraging the Pixabay API to fetch and display images based on user queries. The application includes several key components that work together to provide a seamless user experience.

## Components Overview 
- **`<Searchbar>`**: This component allows users to input search queries. When the user submits the form, the input value is passed to the parent component via the `onSubmit` prop. It includes a search button and a text input field.
- **`<ImageGallery>`**: Displays a list of image cards in a gallery format. Each image is rendered using the `<ImageGalleryItem>` component.
- **`<ImageGalleryItem>`**: A single image card component that renders each image in the gallery. It creates a simple list item containing an image.
- **`<Button>`**: A "Load more" button that, when clicked, loads the next set of images from the API and appends them to the existing list. The button only appears when there are images loaded; it remains hidden if the image list is empty.
- **`<Loader>`**: Displays a spinner while images are being fetched from the API. This component can utilize any existing spinner library, such as `react-loader-spinner`, or another similar option.
- **`<Modal>`**: Opens a modal window with a dark overlay when an image card is clicked. The modal displays the large version of the image. The modal can be closed by pressing the ESC key or by clicking outside the image.

## Pixabay API Integration 
The application integrates with the Pixabay API to retrieve images. To use the API, you need to register for an API key, which is then used to make HTTP requests.

### Example Request URL
> - **Pagination**: The API supports pagination through the `page` parameter, which defaults to `1`. Each response contains 12 images as specified by the `per_page` parameter.
> - **Search Reset**: For each new search, remember to reset the `page` parameter to `1` to start from the first set of results.
> - **Response Properties**: The API returns an array of image objects. Relevant properties include:
>  - `id`: A unique identifier for each image.
>  - `webformatURL`: A link to the small version of the image, suitable for the gallery view.
>  - `largeImageURL`: A link to the large version of the image, displayed in the modal.

## Task: 

Create the `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`, `<Loader>`, `<Button>`, and `<Modal>` components. The prepared styles for these components can be found in the `styles.css` file and adapted to your own needs.

**Instructions for using the Pixabay API:**

For HTTP requests, you will use the public Pixabay image search service. Sign up and obtain a private access key.

**HTTP request URL:**

```
https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
```

The Pixabay API supports pagination, and the `page` parameter defaults to `1`. Each response displays 12 items, as set by the `per_page` parameter. Remember that for every new search by a different key, you need to reset the `page` value to `1`.

The API response includes an array of objects, and the relevant information consists of the following properties:

- **id**: Unique identifier
- **webformatURL**: Link to the small image for the card list
- **largeImageURL**: Link to the large image for the modal window

## `<Searchbar>` Component Description

The component receives a single prop, `onSubmit`—a function to pass the input value at the time of submission.

The component generates a DOM element with the following structure:

```html
<header class="searchbar">
  <form class="form">
    <button type="submit" class="button">
      <span class="button-label">Search</span>
    </button>
    <input
      class="input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
```

## `<ImageGallery>` Component Description 


A list of image cards. Creates a DOM element with the following structure:

```html
<ul class="gallery">
  <!-- A set of <li> tags with images -->
</ul>
```

## `<ImageGalleryItem>` Component Description 


A component containing an image from the list. Creates a DOM element with the following structure:

```html
<li class="gallery-item">
  <img src="" alt="" />
</li>
```

## `<Button>` Component Description 

On clicking the "Load more" button, the next batch of images should be loaded and displayed alongside the existing ones. The button should only be displayed when there are images loaded. If the image list is empty, the button should not be displayed.

## `<Loader>` Component Description 

The spinner component is displayed while images are being loaded. Use any prepared component, for example, `react-loader-spinner` or any similar option.

## `<Modal>` Component Description 

Clicking on an item in the gallery should open a modal window with a dark overlay and display the large version of the image. The modal window should close when the ESC key is pressed or when clicking on the dark overlay.

The appearance of the modal should resemble the functionality of the VanillaJS plugin, except that instead of a white modal window, it will display the image (click the "Run" button in the example).

There is no need to implement animations!

```html
<div class="overlay">
  <div class="modal">
    <img src="" alt="" />
  </div>
</div>
```
