import Header1 from '../components/header-1';
import Header2 from '../components/header-2';
// import AlbumGallery from '../components/album-gallery';
// import FooterVariant1 from '../components/footer-variant-1';
// import FooterVariant2 from '../components/footer-variant-2';

let components = [{
    id: 1, name: Header1, label: 'Header1', configs: {
        name: 'Header1',
        text1: 'cabedalho 1',
        text2: 'cabedalho 1',
        text3: 'cabedalho 1',
        image1: 'cabedalho 1',
        image2: 'cabedalho 1',
        backgroundColor: 'gray',
        minHeight: '200px',
        canEditBackgroundImage: false,
        canEditBackgroundColor: false
    }
}, {
    id: 2, name: Header2, label: 'Header2', configs: {
        name: 'Header2',
        text1: 'HUEHUE',
        backgroundColor: 'red',
        minHeight: '200px',
        canEditBackgroundImage: false,
        canEditBackgroundColor: false
    }
}];

export default components