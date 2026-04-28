"use client"

import { useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css'

const CITIES = [
    { pos: [-26.195246, 28.034088] as [number, number], name: 'Johannesburg',  active: true  },
    { pos: [-33.924868, 18.424055] as [number, number], name: 'Cape Town',      active: true  },
    { pos: [-29.858680, 31.021840] as [number, number], name: 'Durban',         active: true  },
    { pos: [-33.9581,   25.6]      as [number, number], name: 'Gqeberha (PE)', active: false },
    { pos: [-29.1167,   26.2167]   as [number, number], name: 'Bloemfontein',  active: false },
]

export default function GuardianMap() {
    const containerRef = useRef<HTMLDivElement>(null)
    const mapRef       = useRef<any>(null)

    useEffect(() => {
        if (!containerRef.current || mapRef.current) return

        import('leaflet').then((L) => {
            if (!containerRef.current || mapRef.current) return

            // Fix broken default marker icons with Webpack / Next.js
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            delete (L.Icon.Default.prototype as any)._getIconUrl
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                iconUrl:        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl:      'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            })

            const map = L.map(containerRef.current!, {
                center:             [-28.4792625, 24.6727135],
                zoom:               5,
                zoomControl:        false,
                attributionControl: false,
                scrollWheelZoom:    false,
            })

            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors',
            }).addTo(map)

            CITIES.forEach(({ pos, name, active }) => {
                L.marker(pos)
                    .addTo(map)
                    .bindPopup(
                        `<div style="text-align:center">
               <strong>${name}</strong><br/>
               <span style="font-size:11px">Guardian Grid: ${active ? 'Active' : 'Coming Soon'}</span>
             </div>`
                    )
            })

            mapRef.current = map

            requestAnimationFrame(() => {
                map.invalidateSize()
            })
        })

        return () => {
            if (mapRef.current) {
                mapRef.current.remove()
                mapRef.current = null
            }
        }
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                height: '100%',
                width: '100%',
                background: '#0f0f1f',
                //  Creates an isolated stacking context so Leaflet's internal
                // z-indices (tiles at 200, markers at 600, etc.) are scoped
                // entirely within this element and cannot overlap the navbar.
                position: 'relative',
                zIndex: 0,
            }}
        />
    )
}