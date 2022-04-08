import { createGlobalStyle } from 'styled-components';

export const EasyCalendarStyle = createGlobalStyle`
.pika-single {
   z-index: 9999;
   display: block;
   position: relative;
   color: #333;
   background: #fff;
   border: 1px solid #ccc;
   border-bottom-color: #bbb;
   font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

   &.is-hidden {
       display: none;
   }

   &.is-bound {
       position: absolute;
       box-shadow: 0 5px 15px -5px rgba(0,0,0,.5);
   }
}

.pika-single {
   *zoom: 1;

   &:before,
   &:after {
       content: " ";
       display: table;
   }

   &:after { clear: both }
}

.pika-lendar {
   float: left;
   width: 240px;
   margin: 8px;
}

.pika-title {
   position: relative;
   text-align: center;

   select {
       cursor: pointer;
       position: absolute;
       z-index: 9998;
       margin: 0;
       left: 0;
       top: 5px;
       filter: alpha(opacity=0);
       opacity: 0;
   }
}

.pika-label {
   display: inline-block;
   *display: inline;
   position: relative;
   z-index: 9999;
   overflow: hidden;
   margin: 0;
   padding: 5px 3px;
   font-size: 14px;
   line-height: 20px;
   font-weight: bold;
   background-color: #fff;
}

.pika-prev,
.pika-next {
   display: block;
   cursor: pointer;
   position: relative;
   outline: none;
   border: 0;
   padding: 0;
   width: 20px;
   height: 30px;
   text-indent: 20px;
   white-space: nowrap;
   overflow: hidden;
   background-color: transparent;
   background-position: center center;
   background-repeat: no-repeat;
   background-size: 75% 75%;
   opacity: .5;
   *position: absolute;
   *top: 0;

   &:hover {
       opacity: 1;
   }

   &.is-disabled {
       cursor: default;
       opacity: .2;
   }
}

.pika-prev,
.is-rtl .pika-next {
   float: left;
   background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAUklEQVR42u3VMQoAIBADQf8Pgj+OD9hG2CtONJB2ymQkKe0HbwAP0xucDiQWARITIDEBEnMgMQ8S8+AqBIl6kKgHiXqQqAeJepBo/z38J/U0uAHlaBkBl9I4GwAAAABJRU5ErkJggg==');
   *left: 0;
}

.pika-next,
.is-rtl .pika-prev {
   float: right;
   background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAAU0lEQVR42u3VOwoAMAgE0dwfAnNjU26bYkBCFGwfiL9VVWoO+BJ4Gf3gtsEKKoFBNTCoCAYVwaAiGNQGMUHMkjGbgjk2mIONuXo0nC8XnCf1JXgArVIZAQh5TKYAAAAASUVORK5CYII=');
   *right: 0;
}

.pika-select {
   display: inline-block;
   *display: inline;
}

.pika-table {
   width: 100%;
   border-collapse: collapse;
   border-spacing: 0;
   border: 0;

   th,
   td {
       width: 14.285714285714286%;
       padding: 0;
   }

   th {
       color: white;
       font-size: 12px;
       line-height: 25px;
       font-weight: bold;
       text-align: center;
       background-color: grey;
      }
      
    abbr {
        text-decoration: none;
       border-bottom: none;
       cursor: help;
   }
}

.pika-button {
   cursor: pointer;
   display: block;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   outline: none;
   border: 0;
   margin: 0;
   width: 100%;
   padding: 5px;
   color: #666;
   font-size: 12px;
   line-height: 15px;
   text-align: right;
   background: #f5f5f5;

   .is-today & {
       color: #33aaff;
       font-weight: bold;
   }

   .is-selected & {
       color: #fff;
       font-weight: bold;
       background: #33aaff;
       box-shadow: inset 0 1px 3px #178fe5;
       border-radius: 3px;
   }

   .is-disabled & {
       pointer-events: none;
       cursor: default;
       color: #999;
       opacity: .3;
   }

   &:hover {
       color: #fff;
       background: #ff8000;
       box-shadow: none;
       border-radius: 3px;
   }
}

.pika-week {
   font-size: 11px;
   color: #999;
}

`;