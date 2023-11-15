import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;  // indexOf will get us the index of the starting of the target on the url we add its length so we get the index of the ending of the target
    return url.slice(0, index) + 'crop/600/400/' + url.slice(index); // we slice it, we add 'crop/600/400'

}

export default getCroppedImageUrl;