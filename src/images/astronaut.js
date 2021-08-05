import React, { useState } from 'react'
import './float.css'

export default function Astronaut() {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" className=" w-2/5">
            <g id="Astronaut_Isometric 1">
                <path id="Vector" d="M48.78 203.85V106.11C48.7794 104.356 49.2507 102.634 50.1444 101.124C51.0382 99.6144 52.3216 98.3731 53.86 97.53L210.72 11.61C212.183 10.808 213.826 10.3934 215.494 10.4057C217.162 10.4179 218.799 10.8566 220.25 11.68L364.11 93.3C365.663 94.1681 366.949 95.4437 367.831 96.9892C368.712 98.5347 369.154 100.292 369.11 102.07C368.59 121.07 366.99 179.87 366.99 183.31" fill="#68E1FD" />
                <path id="Vector_2" opacity="0.61" d="M48.78 203.85V106.11C48.7794 104.356 49.2507 102.634 50.1444 101.124C51.0382 99.6144 52.3216 98.3731 53.86 97.53L210.72 11.61C212.183 10.808 213.826 10.3934 215.494 10.4057C217.162 10.4179 218.799 10.8566 220.25 11.68L364.11 93.3C365.663 94.1681 366.949 95.4437 367.831 96.9892C368.712 98.5347 369.154 100.292 369.11 102.07C368.59 121.07 366.99 179.87 366.99 183.31" fill="black" />
                <path id="Vector_3" d="M53.45 195.47L210.75 105.63C214.479 103.5 218.702 102.387 222.997 102.403C227.292 102.419 231.507 103.562 235.22 105.72L362.34 179.57C363.736 180.387 364.894 181.556 365.699 182.959C366.503 184.363 366.927 185.952 366.927 187.57C366.927 189.188 366.503 190.777 365.699 192.181C364.894 193.584 363.736 194.753 362.34 195.57L208 286.28C204.35 288.427 200.197 289.569 195.963 289.592C191.728 289.615 187.563 288.517 183.89 286.41L53.43 211.56C52.0138 210.747 50.8375 209.574 50.0202 208.16C49.2029 206.747 48.7735 205.142 48.7755 203.509C48.7775 201.876 49.2109 200.273 50.0318 198.861C50.8526 197.449 52.0318 196.28 53.45 195.47V195.47Z" fill="#E59950" />
                <g id="Astronaut" className="floating">
                    <path id="Vector_4" d="M221.27 107.3C219.94 107.16 207.84 101.8 197.69 103.73C195.23 104.2 177.16 125.62 177.69 129.1C178.22 132.58 187.8 144.8 187.8 144.8L213 120.8" fill="#68E1FD" />
                    <path id="Vector_5" opacity="0.61" d="M210.49 122.58L212.28 120.88L220.58 107.35C219.27 107.21 207.63 102.07 197.58 103.68C197.65 111.47 203.77 118.56 210.49 122.58Z" fill="black" />
                    <path id="Vector_6" d="M247.66 161.21C246 154.43 243.42 142.51 241.38 139.93C238.28 136.01 229.92 127.1 229.92 127.1L223.8 139.69L232.72 148.85L238.14 163.4C241.57 162.67 244.64 163 247.66 161.21Z" fill="white" />
                    <path id="Vector_7" d="M238.72 159.73C238.72 159.73 234.63 170.79 236.17 171.68C238.78 173.18 239.32 165.3 240.74 166.95C242.16 168.6 243.35 176.87 245.86 175.88C248.37 174.89 249.96 162.69 245.31 155.15C240.66 147.61 238.72 159.73 238.72 159.73Z" fill="white" />
                    <path id="Vector_8" d="M166.71 172.69C166.71 172.69 160.95 172.54 159.96 175.69C158.97 178.84 157.65 195.69 163.45 196.53C169.25 197.37 170.32 181.08 170.32 181.08" fill="white" />
                    <path id="Vector_9" d="M153.11 149.29C152.33 149.13 149.77 153.44 149.38 154.09C148.222 156.018 147.356 158.108 146.81 160.29C146.05 163.39 145.41 167.69 146.65 170.74C148.72 175.86 154.91 171.22 156.65 168.1C157.38 166.697 157.964 165.223 158.39 163.7C158.682 161.515 158.842 159.314 158.87 157.11V151C156.996 150.286 155.07 149.714 153.11 149.29V149.29Z" fill="white" />
                    <path id="Vector_10" d="M199.34 124.54C199.34 124.54 187.87 144 186.81 151.19C185.75 158.38 181.01 182.62 186.39 183.93C191.77 185.24 197.23 183.76 200.39 171.51C202.49 163.51 202.24 150.94 202.24 150.94L199.34 124.54Z" fill="white" />
                    <path id="Vector_11" d="M228.2 134.45C228.93 132.04 229.44 129.58 229.93 127.11L229.69 126.76L215.4 117.43C215.4 117.43 206.62 121 205.07 126.35C203.52 131.7 209.82 153.29 209.82 153.29L226.34 139.29C227.053 137.714 227.674 136.098 228.2 134.45V134.45Z" fill="white" />
                    <path id="Vector_12" d="M188.06 170.47L166.72 172.69C166.72 172.69 162.21 179.53 168.23 184.79C168.23 184.79 188.67 187.04 194.61 182.56C200.55 178.08 188.06 170.47 188.06 170.47Z" fill="white" />
                    <path id="Vector_13" d="M173.54 167.21C179.68 164.59 199.17 154.39 199.17 154.39Z" fill="white" />
                    <path id="Vector_14" d="M173.54 167.21C168.66 168 156.31 164.32 156.31 164.32C146.31 160.24 158.4 150.74 158.4 150.74C158.4 150.74 168.31 152.88 173.05 151.37C177.79 149.86 193.6 134.16 193.6 134.16C193.6 134.16 195.25 156.16 193.08 159.66C190.91 163.16 173.54 167.21 173.54 167.21Z" fill="white" />
                    <path id="Vector_15" d="M216.8 157.09C216.8 157.09 225.95 156.87 225.95 158.86C225.95 160.85 222.12 161.46 222.12 161.46C222.12 161.46 227.4 169.58 224.99 172.46C222.58 175.34 216.45 174.3 215.38 173.07C214.31 171.84 211.06 163.83 211.06 163.83" fill="white" />
                    <path id="Vector_16" d="M184.33 170.47C184.33 170.47 190.72 176.21 192.81 176.82C194.9 177.43 199.05 176.17 199.05 176.17C199.05 176.17 196.05 179.4 192.81 179.55C189.57 179.7 184.33 170.47 184.33 170.47Z" fill="#57464E" />
                    <path id="Vector_17" d="M171.15 168.2C169.867 165.469 168.978 162.57 168.51 159.59C168.4 157.12 169.85 151.85 169.85 151.85L171.21 151.73C171.21 151.73 169.59 158.9 170.21 160.13C170.83 161.36 173.51 167.21 173.51 167.21C173.51 167.21 173.65 169.88 171.15 168.2Z" fill="#57464E" />
                    <path id="Vector_18" d="M226.41 139.36L209.16 138C209.16 138 209.06 146.89 210.83 149.49C212.6 152.09 212.51 150.86 212.51 150.86L226.41 139.36Z" fill="#A8A8A8" />
                    <path id="Vector_19" d="M215.39 117.43C215.39 117.43 202 121.3 199.34 125.43C196.68 129.56 196.5 147.18 199.34 151.83C202.18 156.48 211.06 164.76 211.06 164.76C211.06 164.76 216.35 160.19 216.8 157.98C216.8 157.98 210.87 148.19 210.16 145.68C209.45 143.17 215.39 117.43 215.39 117.43Z" fill="white" />
                    <path id="Vector_20" d="M199.34 151.78C199.34 151.78 205.88 148.17 210.88 147.37C210.88 147.37 204.5 145.3 199.34 151.78Z" fill="#57464E" />
                    <path id="Vector_21" d="M222.14 127.11C222.14 127.11 231.88 127.53 235.74 120.52C239.6 113.51 234.34 104.18 225.86 103.42C217.38 102.66 212.58 110.42 212.58 113.66C212.58 116.9 215 125.28 222.14 127.11Z" fill="white" />
                    <path id="Vector_22" d="M216 118.71C216 118.71 216.32 128.35 226.86 127.71C237.4 127.07 238.54 117.88 236.78 115.37C235.02 112.86 222.34 107 216 118.71Z" fill="url(#paint0_linear)" />
                    <path id="Vector_23" opacity="0.54" d="M235.48 117.78C235.414 117.597 235.282 117.446 235.109 117.356C234.937 117.267 234.737 117.246 234.55 117.298C234.362 117.35 234.202 117.471 234.1 117.636C233.998 117.802 233.962 117.999 234 118.19C234.212 118.877 234.241 119.608 234.083 120.31C233.925 121.012 233.586 121.66 233.1 122.19C232.43 122.92 233.52 124.01 234.19 123.28C234.864 122.554 235.337 121.665 235.563 120.701C235.789 119.736 235.76 118.73 235.48 117.78V117.78Z" fill="white" />
                    <path id="Vector_24" opacity="0.54" d="M231.49 123.69C231.286 123.69 231.09 123.771 230.946 123.915C230.801 124.06 230.72 124.256 230.72 124.46C230.72 124.664 230.801 124.86 230.946 125.004C231.09 125.149 231.286 125.23 231.49 125.23C231.694 125.23 231.89 125.149 232.034 125.004C232.179 124.86 232.26 124.664 232.26 124.46C232.26 124.256 232.179 124.06 232.034 123.915C231.89 123.771 231.694 123.69 231.49 123.69V123.69Z" fill="white" />
                    <path id="Vector_25" d="M215.48 111.68L229.53 94.53C229.53 94.53 229.92 94.36 229.78 94.79L216 112L215.48 111.68Z" fill="#A8A8A8" />
                    <path id="Vector_26" d="M217.79 111.68C217.79 111.68 216.23 109.78 215.49 109.85C214.75 109.92 212.93 112.18 213.26 112.77C213.59 113.36 214.62 114.45 215.14 114.32C215.66 114.19 217.79 111.68 217.79 111.68Z" fill="#A8A8A8" />
                    <path id="Vector_27" d="M217 110.75C216 111.75 215 112.65 214 113.58C214.42 114.02 214.92 114.39 215.24 114.32C215.76 114.19 217.9 111.68 217.9 111.68C217.9 111.68 217.51 111.21 217 110.75Z" fill="#898989" />
                    <path id="Vector_28" d="M211.58 151.78L209.1 153.55L210.34 155.07L212.75 153.43L211.58 151.78Z" fill="#57464E" />
                    <path id="Vector_29" d="M213.34 155.46C213.207 155.46 213.08 155.513 212.986 155.606C212.893 155.7 212.84 155.827 212.84 155.96C212.84 156.093 212.893 156.22 212.986 156.314C213.08 156.407 213.207 156.46 213.34 156.46C213.473 156.46 213.6 156.407 213.694 156.314C213.787 156.22 213.84 156.093 213.84 155.96C213.84 155.827 213.787 155.7 213.694 155.606C213.6 155.513 213.473 155.46 213.34 155.46Z" fill="#777777" />
                    <path id="Vector_30" d="M214.86 157.14C214.727 157.14 214.6 157.193 214.506 157.286C214.413 157.38 214.36 157.507 214.36 157.64C214.36 157.773 214.413 157.9 214.506 157.994C214.6 158.087 214.727 158.14 214.86 158.14C214.993 158.14 215.12 158.087 215.214 157.994C215.307 157.9 215.36 157.773 215.36 157.64C215.36 157.507 215.307 157.38 215.214 157.286C215.12 157.193 214.993 157.14 214.86 157.14Z" fill="#777777" />
                    <path id="Vector_31" d="M162 152.64C162 152.64 156.34 157.27 156.38 160C156.42 162.73 158.16 168.33 158.16 168.33C158.16 168.33 158.71 162.14 159.49 160.24C160.746 157.854 162.145 155.547 163.68 153.33L162 152.64Z" fill="#57464E" />
                    <path id="Vector_32" d="M166.71 172.69C166.71 172.69 165.3 177.04 165.97 178.69C166.64 180.34 169.82 185.39 169.82 185.39L172.17 185.15C172.17 185.15 167.86 179.22 167.59 177.95C167.32 176.68 166.71 172.69 166.71 172.69Z" fill="#57464E" />
                    <path id="Vector_33" d="M153.93 148.37C154.04 148.19 151.77 152.37 152.16 152.65C153.702 153.168 155.271 153.601 156.86 153.95L159.31 149.83L153.93 148.37Z" fill="#2D1E45" />
                    <path id="Vector_34" d="M199.34 125.38C199.34 125.38 196.61 141.84 197.28 144.61C197.95 147.38 202.11 155.46 202.11 155.46L201.94 161.46C201.94 161.46 195.27 152.15 194.84 147.09C194.41 142.03 199.34 125.38 199.34 125.38Z" fill="#A8A8A8" />
                    <path id="Vector_35" d="M185.18 161.58C185.18 161.58 185.55 152.27 185.89 149.72C186.23 147.17 188.37 139.18 188.37 139.18L180.65 146.09L178.9 164.7L185.18 161.58Z" fill="#A8A8A8" />
                </g>
                <path id="Vector_36" d="M287.74 112.34C288.596 112.34 289.29 111.646 289.29 110.79C289.29 109.934 288.596 109.24 287.74 109.24C286.884 109.24 286.19 109.934 286.19 110.79C286.19 111.646 286.884 112.34 287.74 112.34Z" fill="white" />
                <path id="Vector_37" d="M216.34 84.36C216.207 84.36 216.08 84.4127 215.986 84.5064C215.893 84.6002 215.84 84.7274 215.84 84.86C215.84 84.9926 215.893 85.1198 215.986 85.2135C216.08 85.3073 216.207 85.36 216.34 85.36C216.473 85.36 216.6 85.3073 216.694 85.2135C216.787 85.1198 216.84 84.9926 216.84 84.86C216.84 84.7274 216.787 84.6002 216.694 84.5064C216.6 84.4127 216.473 84.36 216.34 84.36Z" fill="white" />
                <path id="Vector_38" d="M149 102.13C148.867 102.13 148.74 102.183 148.646 102.276C148.553 102.37 148.5 102.497 148.5 102.63C148.5 102.763 148.553 102.89 148.646 102.984C148.74 103.077 148.867 103.13 149 103.13C149.133 103.13 149.26 103.077 149.354 102.984C149.447 102.89 149.5 102.763 149.5 102.63C149.5 102.497 149.447 102.37 149.354 102.276C149.26 102.183 149.133 102.13 149 102.13Z" fill="white" />
                <path id="Vector_39" d="M120 149.66C119.867 149.66 119.74 149.713 119.646 149.806C119.553 149.9 119.5 150.027 119.5 150.16C119.5 150.293 119.553 150.42 119.646 150.514C119.74 150.607 119.867 150.66 120 150.66C120.133 150.66 120.26 150.607 120.354 150.514C120.447 150.42 120.5 150.293 120.5 150.16C120.5 150.027 120.447 149.9 120.354 149.806C120.26 149.713 120.133 149.66 120 149.66Z" fill="white" />
                <path id="Vector_40" d="M165.51 143.46C165.377 143.46 165.25 143.513 165.156 143.606C165.063 143.7 165.01 143.827 165.01 143.96C165.01 144.093 165.063 144.22 165.156 144.314C165.25 144.407 165.377 144.46 165.51 144.46C165.643 144.46 165.77 144.407 165.864 144.314C165.957 144.22 166.01 144.093 166.01 143.96C166.01 143.827 165.957 143.7 165.864 143.606C165.77 143.513 165.643 143.46 165.51 143.46Z" fill="white" />
                <path id="Vector_41" d="M154.76 114.11C154.627 114.11 154.5 114.163 154.406 114.256C154.313 114.35 154.26 114.477 154.26 114.61C154.26 114.743 154.313 114.87 154.406 114.964C154.5 115.057 154.627 115.11 154.76 115.11C154.893 115.11 155.02 115.057 155.114 114.964C155.207 114.87 155.26 114.743 155.26 114.61C155.26 114.477 155.207 114.35 155.114 114.256C155.02 114.163 154.893 114.11 154.76 114.11Z" fill="white" />
                <path id="Vector_42" d="M273.71 116.68V117.09C273.71 117.223 273.763 117.35 273.856 117.444C273.95 117.537 274.077 117.59 274.21 117.59C274.343 117.59 274.47 117.537 274.564 117.444C274.657 117.35 274.71 117.223 274.71 117.09V116.68C274.71 116.547 274.657 116.42 274.564 116.326C274.47 116.233 274.343 116.18 274.21 116.18C274.077 116.18 273.95 116.233 273.856 116.326C273.763 116.42 273.71 116.547 273.71 116.68Z" fill="white" />
                <path id="Vector_43" d="M314.71 156.68C314.577 156.68 314.45 156.733 314.356 156.826C314.263 156.92 314.21 157.047 314.21 157.18C314.21 157.313 314.263 157.44 314.356 157.533C314.45 157.627 314.577 157.68 314.71 157.68C314.843 157.68 314.97 157.627 315.064 157.533C315.157 157.44 315.21 157.313 315.21 157.18C315.21 157.047 315.157 156.92 315.064 156.826C314.97 156.733 314.843 156.68 314.71 156.68Z" fill="white" />
                <path id="Vector_44" d="M258.09 95.52C257.957 95.52 257.83 95.5727 257.736 95.6665C257.643 95.7602 257.59 95.8874 257.59 96.02C257.59 96.1526 257.643 96.2798 257.736 96.3736C257.83 96.4673 257.957 96.52 258.09 96.52C258.223 96.52 258.35 96.4673 258.444 96.3736C258.537 96.2798 258.59 96.1526 258.59 96.02C258.59 95.8874 258.537 95.7602 258.444 95.6665C258.35 95.5727 258.223 95.52 258.09 95.52Z" fill="white" />
                <path id="Vector_45" d="M274.21 176.11C274.077 176.11 273.95 176.163 273.856 176.256C273.763 176.35 273.71 176.477 273.71 176.61C273.71 176.743 273.763 176.87 273.856 176.964C273.95 177.057 274.077 177.11 274.21 177.11C274.343 177.11 274.47 177.057 274.564 176.964C274.657 176.87 274.71 176.743 274.71 176.61C274.71 176.477 274.657 176.35 274.564 176.256C274.47 176.163 274.343 176.11 274.21 176.11Z" fill="white" />
                <path id="Vector_46" d="M120.46 201.32C120.327 201.32 120.2 201.373 120.106 201.467C120.013 201.56 119.96 201.687 119.96 201.82C119.96 201.953 120.013 202.08 120.106 202.174C120.2 202.267 120.327 202.32 120.46 202.32C120.593 202.32 120.72 202.267 120.814 202.174C120.907 202.08 120.96 201.953 120.96 201.82C120.96 201.687 120.907 201.56 120.814 201.467C120.72 201.373 120.593 201.32 120.46 201.32Z" fill="white" />
                <path id="Vector_47" d="M106.76 146.09L106.35 145.68C106.256 145.586 106.128 145.533 105.995 145.533C105.862 145.533 105.734 145.586 105.64 145.68C105.546 145.774 105.493 145.902 105.493 146.035C105.493 146.168 105.546 146.296 105.64 146.39L106.05 146.8C106.144 146.894 106.272 146.947 106.405 146.947C106.538 146.947 106.666 146.894 106.76 146.8C106.854 146.706 106.907 146.578 106.907 146.445C106.907 146.312 106.854 146.184 106.76 146.09V146.09Z" fill="white" />
                <path id="Vector_48" d="M87 182.31C86.8674 182.31 86.7402 182.363 86.6464 182.457C86.5527 182.55 86.5 182.677 86.5 182.81C86.5 182.943 86.5527 183.07 86.6464 183.164C86.7402 183.257 86.8674 183.31 87 183.31C87.1326 183.31 87.2598 183.257 87.3536 183.164C87.4473 183.07 87.5 182.943 87.5 182.81C87.5 182.677 87.4473 182.55 87.3536 182.457C87.2598 182.363 87.1326 182.31 87 182.31Z" fill="white" />
                <path id="Vector_49" d="M182.87 239.34C182.737 239.34 182.61 239.393 182.516 239.486C182.423 239.58 182.37 239.707 182.37 239.84C182.37 239.973 182.423 240.1 182.516 240.194C182.61 240.287 182.737 240.34 182.87 240.34C183.003 240.34 183.13 240.287 183.224 240.194C183.317 240.1 183.37 239.973 183.37 239.84C183.37 239.707 183.317 239.58 183.224 239.486C183.13 239.393 183.003 239.34 182.87 239.34Z" fill="white" />
                <path id="Vector_50" d="M211.38 234.8C211.247 234.8 211.12 234.853 211.026 234.946C210.933 235.04 210.88 235.167 210.88 235.3C210.88 235.433 210.933 235.56 211.026 235.654C211.12 235.747 211.247 235.8 211.38 235.8C211.513 235.8 211.64 235.747 211.734 235.654C211.827 235.56 211.88 235.433 211.88 235.3C211.88 235.167 211.827 235.04 211.734 234.946C211.64 234.853 211.513 234.8 211.38 234.8Z" fill="white" />
                <path id="Vector_51" d="M282.06 216.2C281.927 216.2 281.8 216.253 281.706 216.346C281.613 216.44 281.56 216.567 281.56 216.7C281.56 216.833 281.613 216.96 281.706 217.054C281.8 217.147 281.927 217.2 282.06 217.2C282.193 217.2 282.32 217.147 282.414 217.054C282.507 216.96 282.56 216.833 282.56 216.7C282.56 216.567 282.507 216.44 282.414 216.346C282.32 216.253 282.193 216.2 282.06 216.2Z" fill="white" />
                <path id="Vector_52" d="M316.78 190.58C316.647 190.58 316.52 190.633 316.426 190.726C316.333 190.82 316.28 190.947 316.28 191.08C316.28 191.213 316.333 191.34 316.426 191.434C316.52 191.527 316.647 191.58 316.78 191.58C316.913 191.58 317.04 191.527 317.134 191.434C317.227 191.34 317.28 191.213 317.28 191.08C317.28 190.947 317.227 190.82 317.134 190.726C317.04 190.633 316.913 190.58 316.78 190.58Z" fill="white" />
                <path id="Vector_53" d="M267.18 152.55C267.047 152.55 266.92 152.603 266.826 152.696C266.733 152.79 266.68 152.917 266.68 153.05C266.68 153.183 266.733 153.31 266.826 153.404C266.92 153.497 267.047 153.55 267.18 153.55C267.313 153.55 267.44 153.497 267.534 153.404C267.627 153.31 267.68 153.183 267.68 153.05C267.68 152.917 267.627 152.79 267.534 152.696C267.44 152.603 267.313 152.55 267.18 152.55Z" fill="white" />
                <path id="Vector_54" d="M92.77 208.35C92.6374 208.35 92.5102 208.403 92.4164 208.496C92.3227 208.59 92.27 208.717 92.27 208.85C92.27 208.983 92.3227 209.11 92.4164 209.204C92.5102 209.297 92.6374 209.35 92.77 209.35C92.9026 209.35 93.0298 209.297 93.1235 209.204C93.2173 209.11 93.27 208.983 93.27 208.85C93.27 208.717 93.2173 208.59 93.1235 208.496C93.0298 208.403 92.9026 208.35 92.77 208.35Z" fill="white" />
                <path id="Vector_55" d="M176.67 81.53C173.45 81.53 173.45 86.53 176.67 86.53C179.89 86.53 179.89 81.53 176.67 81.53Z" fill="white" />
                <path id="Vector_56" d="M287.74 209.16C292.556 209.16 296.46 207.687 296.46 205.87C296.46 204.053 292.556 202.58 287.74 202.58C282.924 202.58 279.02 204.053 279.02 205.87C279.02 207.687 282.924 209.16 287.74 209.16Z" fill="#CC7A36" />
                <path id="Vector_57" d="M291.47 206.57V158H289.29V206.3C289.996 206.513 290.733 206.605 291.47 206.57Z" fill="#68E1FD" />
                <path id="Vector_58" d="M289.29 158C289.29 158 293.46 153.54 301.75 155.81C306.805 157.171 312.09 157.45 317.26 156.63V169.29C317.26 169.29 304.46 169.93 300.67 167.79C296.88 165.65 289.29 171.32 289.29 171.32" fill="#68E1FD" />
                <path id="Vector_59" d="M123.63 214.93C128.446 214.93 132.35 213.457 132.35 211.64C132.35 209.823 128.446 208.35 123.63 208.35C118.814 208.35 114.91 209.823 114.91 211.64C114.91 213.457 118.814 214.93 123.63 214.93Z" fill="#CC7A36" />
                <g id="Shadow" className="shadow">
                    <path id="Vector_60" d="M200.99 216.17C216.018 216.17 228.2 214.142 228.2 211.64C228.2 209.138 216.018 207.11 200.99 207.11C185.962 207.11 173.78 209.138 173.78 211.64C173.78 214.142 185.962 216.17 200.99 216.17Z" fill="#CC7A36" />
                    
                </g>
            </g>
            <defs>
                <linearGradient id="paint0_linear" x1="247.23" y1="119.33" x2="218.59" y2="119.88" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.03" stop-color="#F7931E" />
                    <stop offset="1" stop-color="#1B1464" />
                </linearGradient>
            </defs>
        </svg>
    )
}