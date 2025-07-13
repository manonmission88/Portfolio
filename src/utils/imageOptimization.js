// Image optimization utilities
export const compressImage = (file, quality = 0.8, maxWidth = 1200, maxHeight = 800) => {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            // Calculate new dimensions
            let { width, height } = img;
            
            if (width > maxWidth || height > maxHeight) {
                const ratio = Math.min(maxWidth / width, maxHeight / height);
                width *= ratio;
                height *= ratio;
            }

            // Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            // Draw and compress
            ctx.drawImage(img, 0, 0, width, height);
            
            canvas.toBlob(resolve, 'image/jpeg', quality);
        };

        img.src = URL.createObjectURL(file);
    });
};

export const createThumbnail = (file, size = 200) => {
    return new Promise((resolve) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
            canvas.width = size;
            canvas.height = size;

            // Calculate crop dimensions for square thumbnail
            const minDimension = Math.min(img.width, img.height);
            const x = (img.width - minDimension) / 2;
            const y = (img.height - minDimension) / 2;

            ctx.drawImage(img, x, y, minDimension, minDimension, 0, 0, size, size);
            
            canvas.toBlob(resolve, 'image/jpeg', 0.8);
        };

        img.src = URL.createObjectURL(file);
    });
};

export const validateImageFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!validTypes.includes(file.type)) {
        throw new Error('Please upload a valid image file (JPEG, PNG, or WebP)');
    }

    if (file.size > maxSize) {
        throw new Error('Image size must be less than 10MB');
    }

    return true;
};

export const generateImageURL = (file) => {
    return URL.createObjectURL(file);
};

export const lazyLoadImage = (imgElement, src) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = src;
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    observer.observe(imgElement);
};
