image_html = document.querySelector('#prototipo-imagem');

let image_refs = [
    {
        src: 'placeholder.png',
        title: 'place your title here',
        description: 'place you description here'
    }
]
let current_image_index = 0;

const image_title_html = document.querySelector('#prototipo-titulo-imagem-descicao');
const image_description_html = document.querySelector('#prototipo-imagem-descricao');
function updateImage()
{
    image_data = image_refs[current_image_index];

    image_html.setAttribute('src', image_data.src);
    image_html.setAttribute('alt', image_data.title);

    image_title_html.textContent = image_data.title;
    image_description_html.textContent = image_data.description;
}

function nextImage()
{
    if (current_image_index < (image_refs.length - 1)) {
        ++current_image_index;
        updateImage();
    } 
}

function previousImage()
{
    if (current_image_index > 0) {
        --current_image_index;
        updateImage();
    }
}



/*
    test data
*/
image_refs = [];

folder_relative_path = '../../icones/';

image_refs.push({
    src: folder_relative_path + 'prototipo_example1.png',
    title: 'example 0 title',
    description: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tristique velit enim, id bibendum ex porttitor vel. Duis eu lorem et mauris sollicitudin sollicitudin quis et nisi. Proin odio tortor, viverra ut pellentesque at, condimentum id elit. Quisque vel ante urna. Ut vel dui convallis, elementum mauris a, ullamcorper nulla. Aliquam rhoncus velit ut iaculis tempor. Maecenas vestibulum urna quis ligula maximus, eu suscipit magna euismod. Donec ligula massa, aliquam at nisl id, aliquam euismod nulla.

Curabitur ornare purus ac ultrices tempus. Maecenas eget bibendum risus. Nulla facilisi. Nam malesuada imperdiet lectus, nec suscipit dolor posuere vel. Ut malesuada interdum dignissim. Vestibulum sollicitudin, metus vitae facilisis finibus, tellus sapien gravida ligula, eget finibus elit enim in quam. Morbi tincidunt mollis efficitur. Nullam vitae consequat augue. Donec rhoncus nulla vitae lorem dictum, ut varius quam efficitur. Quisque tempus, mauris vestibulum vehicula posuere, enim tellus pretium erat, eu varius risus magna et tortor. Proin mauris ligula, varius sed risus vitae, aliquet mollis ligula. Aliquam sed diam magna. Donec vulputate condimentum gravida. Donec pulvinar lacinia efficitur. Proin eu auctor ex. Maecenas at ullamcorper turpis.

Maecenas vel sem quis felis egestas luctus. Nam viverra lectus in mauris fringilla, a ullamcorper odio sodales. Morbi mattis ligula eu nisl consectetur, id vulputate arcu pretium. Nam ante erat, sagittis ut blandit sed, condimentum ut lorem. Nullam mattis laoreet commodo. Etiam nibh dui, sodales accumsan neque non, varius placerat sapien. Nunc et nunc turpis. In id ex vel nunc volutpat aliquam. Duis at porttitor risus, sed euismod felis. Etiam nec faucibus nulla, eget auctor est. Quisque cursus felis accumsan justo commodo tincidunt.

Proin nulla sem, varius accumsan varius at, tempus sed lorem. Phasellus condimentum leo ac felis tincidunt placerat in quis lorem. Nunc venenatis placerat odio, id luctus dolor luctus eget. Nunc dictum massa nec tortor volutpat, eget tincidunt tortor sodales. Mauris rhoncus ligula interdum metus consectetur bibendum. Suspendisse at arcu eleifend, facilisis nulla ut, auctor odio. Sed tincidunt libero id turpis bibendum, a luctus diam molestie. Sed nisl ante, pulvinar id erat ut, accumsan tristique nibh. Fusce pellentesque, diam eu porttitor luctus, dui dolor fringilla purus, sed sollicitudin nibh magna vitae augue. Aliquam commodo arcu eget justo convallis pellentesque. In eu dolor eget massa rhoncus tincidunt. Nullam posuere nisl et justo pulvinar dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Phasellus faucibus dolor velit, convallis tempus enim venenatis ut. Ut elementum sagittis elit, a porta sapien pellentesque malesuada. Vestibulum iaculis ac felis in rutrum. Sed est mi, dictum ut ornare et, malesuada id quam. Fusce ante velit, eleifend eget ultricies molestie, ullamcorper vel neque. Proin et enim efficitur eros rutrum vehicula. Mauris porttitor libero purus, vitae laoreet diam tempor sed. Praesent laoreet bibendum porttitor. Nulla pellentesque, lectus vitae pharetra iaculis, massa velit congue justo, eu cursus turpis nisi ac ex. Sed ultricies nec dolor nec convallis. Proin vel vulputate mi. Sed ac lobortis tortor, eget interdum massa. Donec bibendum sem lorem, ac iaculis eros accumsan ut. 
    `
})
image_refs.push({
    src: 'prototipo_example1.png',
    title: 'example 1 title',
    description: 'example 1 is a very cool example'
})
image_refs.push({
    src: 'prototipo_example2.png',
    title: 'example 2 title',
    description: 'example 2 is sad'
})
image_refs.push({
    src: 'prototipo_example3.png',
    title: 'example 3 title',
    description: 'example 3 is too void of emotions to describe it self'
})

updateImage();