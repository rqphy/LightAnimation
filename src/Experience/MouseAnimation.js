import * as THREE from 'three'
import Experience from './Experience'

export default class MouseAnimation
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.light = this.experience.world.light

        this.lightPosition = {}
        this.lightPosition.x = 0
        this.lightPosition.y = 0

        this.limits = {}
        this.limits.x = { min: -5, max: 5 }
        this.limits.y = { min: -5, max: 5 }

        this.mousePosition = {}
        this.mousePosition.x = 0
        this.mousePosition.y = 0

        this.canvas.addEventListener('mousemove', this.getMousePosition)
    }

    getMousePosition = (_event) =>
    {
        _event.preventDefault()

        this.mousePosition.x = _event.clientX
        this.mousePosition.y = _event.clientY
        
    }
    
    updateLightPosition(_x, _y)
    {
        this.light.light.position.set(
            _x,
            _y,
            this.light.light.position.z
        )
    }
    
    update()
    {
        this.lightPosition.x = ((this.mousePosition.x * (Math.abs(this.limits.x.max)+Math.abs(this.limits.x.min))) / window.innerWidth) - ((Math.abs(this.limits.x.max)+Math.abs(this.limits.x.min))/ 2)
        this.lightPosition.y = ((this.mousePosition.y * (Math.abs(this.limits.y.max)+Math.abs(this.limits.y.min))) / window.innerHeight) - ((Math.abs(this.limits.y.max)+Math.abs(this.limits.y.min))/ 2)
        console.log(this.lightPosition.x, this.lightPosition.y)
        this.updateLightPosition(
            - this.lightPosition.x,
            this.lightPosition.y
        )
    }
}