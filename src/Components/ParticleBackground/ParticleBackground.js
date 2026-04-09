import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
    const canvasRef = useRef(null);
    const animationRef = useRef(null);
    const particlesRef = useRef([]);

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

        // Particle class
        class Particle {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
                this.fadeDelay = Math.random() * 600;
                this.fadeStart = Date.now() + this.fadeDelay;
                this.fadingOut = false;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.z = Math.random() * 1000 + 1;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
                this.fadeDelay = Math.random() * 600;
                this.fadeStart = Date.now() + this.fadeDelay;
                this.fadingOut = false;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Fade effect
                if (Date.now() > this.fadeStart) {
                    if (this.fadingOut) {
                        this.opacity -= 0.008;
                        if (this.opacity <= 0) {
                            this.reset();
                        }
                    } else {
                        this.opacity += 0.008;
                        if (this.opacity >= 0.8) {
                            this.fadingOut = true;
                        }
                    }
                }
            }

            draw() {
                ctx.save();
                ctx.globalAlpha = this.opacity;
                ctx.beginPath();
                
                // Create gradient for particle
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.radius
                );
                gradient.addColorStop(0, '#87CEEB');
                gradient.addColorStop(0.3, '#B0E0E6');
                gradient.addColorStop(0.6, '#87CEFA');
                gradient.addColorStop(1, 'transparent');
                
                ctx.fillStyle = gradient;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        // Create particles
        const createParticles = () => {
            const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
            particlesRef.current = [];
            for (let i = 0; i < particleCount; i++) {
                particlesRef.current.push(new Particle());
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw connections between nearby particles
            for (let i = 0; i < particlesRef.current.length; i++) {
                for (let j = i + 1; j < particlesRef.current.length; j++) {
                    const dx = particlesRef.current[i].x - particlesRef.current[j].x;
                    const dy = particlesRef.current[i].y - particlesRef.current[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.save();
                        ctx.globalAlpha = (1 - distance / 100) * 0.3;
                        const gradient = ctx.createLinearGradient(
                            particlesRef.current[i].x, particlesRef.current[i].y,
                            particlesRef.current[j].x, particlesRef.current[j].y
                        );
                        gradient.addColorStop(0, '#87CEEB');
                        gradient.addColorStop(0.5, '#B0E0E6');
                        gradient.addColorStop(1, '#87CEFA');
                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
                        ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }

            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        createParticles();
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
            className="particle-background"
        />
    );
};

export default ParticleBackground;
