import React, { useEffect, useRef } from 'react';
import './BackgroundShapes.css';

const BackgroundShapes = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const shapesRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Shape class
        class Shape {
            constructor() {
                this.reset();
                this.rotation = 0;
                this.rotationSpeed = (Math.random() - 0.5) * 0.02;
                this.scale = Math.random() * 0.5 + 0.5;
                this.scaleDirection = Math.random() > 0.5 ? 1 : -1;
                this.scaleSpeed = 0.001;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 60 + 20;
                this.opacity = Math.random() * 0.3 + 0.1;
                this.type = Math.floor(Math.random() * 3); // 0: circle, 1: triangle, 2: square
                this.color = this.getRandomColor();
            }

            getRandomColor() {
                const colors = [
                    'rgba(135, 206, 235, 0.4)',
                    'rgba(176, 224, 230, 0.3)',
                    'rgba(135, 206, 250, 0.3)',
                    'rgba(173, 216, 230, 0.3)',
                    'rgba(224, 246, 255, 0.3)'
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.rotation += this.rotationSpeed;
                this.scale += this.scaleSpeed * this.scaleDirection;

                if (this.scale > 1.2 || this.scale < 0.3) {
                    this.scaleDirection *= -1;
                }

                if (this.x < -this.size || this.x > canvas.width + this.size) this.vx *= -1;
                if (this.y < -this.size || this.y > canvas.height + this.size) this.vy *= -1;
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation);
                ctx.scale(this.scale, this.scale);
                
                ctx.fillStyle = this.color;
                ctx.strokeStyle = this.color.replace('0.3', '0.6');
                ctx.lineWidth = 2;

                switch (this.type) {
                    case 0: // Circle
                        ctx.beginPath();
                        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.stroke();
                        break;
                    case 1: // Triangle
                        ctx.beginPath();
                        ctx.moveTo(0, -this.size / 2);
                        ctx.lineTo(-this.size / 2, this.size / 2);
                        ctx.lineTo(this.size / 2, this.size / 2);
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();
                        break;
                    case 2: // Square
                        ctx.beginPath();
                        ctx.rect(-this.size / 2, -this.size / 2, this.size, this.size);
                        ctx.fill();
                        ctx.stroke();
                        break;
                    default:
                        // Default to circle
                        ctx.beginPath();
                        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.stroke();
                        break;
                }
                ctx.restore();
            }
        }

        // Create shapes
        const createShapes = () => {
            const shapeCount = Math.floor((canvas.width * canvas.height) / 20000);
            shapesRef.current = [];
            for (let i = 0; i < shapeCount; i++) {
                shapesRef.current.push(new Shape());
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Update and draw shapes
            shapesRef.current.forEach(shape => {
                shape.update();
                shape.draw();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        createShapes();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="background-shapes"
        />
    );
};

export default BackgroundShapes;
