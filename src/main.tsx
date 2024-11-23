import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import App from './App';
import './index.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import List from './lecture/2_List';
import User from './lecture/3_User';
import CreateList from './lecture/4_CreateList';
import Cube from './lecture/5_Cube';

const Example1 = () => {
    return (
        <code>
            <pre>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {`// adds two numbers
const add = (a, b) => {
  if (!_isNumber(a) || !_isNumber(b)) {
    throw new Error('parameters must be numbers');
  }
  return a + b;
};`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {`// caculates the average
const average = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('parameter must be an array');
  }

  return (
    array.reduce((prev, curr) => {
      prev += curr;
      return prev;
    }, 0) / array.length
  );
};`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {`// calculates bounding box of a list of points
const boundingBox2D = (points) => {
  if (!Array.isArray(points)) {
    throw new Error("parameter must be an array");
  }
  const min = { x: Infinity, y: Infinity };
  const max = { x: -Infinity, y: -Infinity };

  points.forEach((point) => {
    if (point.x < min.x) {
      min.x = point.x;
    }
    if (point.x > max.x) {
      max.x = point.x;
    }
    if (point.y < min.y) {
      min.y = point.y;
    }
    if (point.y > max.y) {
      max.y = point.y;
    }
  });

  return { min, max };
};`}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="javascript" style={docco}>
                    {`// clamps an array of points
const clamp = (points, min, max) => {
  if (!Array.isArray(points)) {
    throw new Error("parameter must be an array");
  }
  if (!_isNumber(min) || !_isNumber(max)) {
    throw new Error("parameters must be numbers");
  }

  return points.map((point) => {
    return {
      x: Math.max(min, Math.min(max, point.x)),
      y: Math.max(min, Math.min(max, point.y)),
    };
  });
};`}
                </SyntaxHighlighter>
            </pre>
        </code>
    );
};

const Example2 = () => {
    return <List title="New List" items={['First item', 'Second item', 'Third item']} />;
};

const Example3 = () => {
    return <User id="123" />;
};

const Example4 = () => {
    return <CreateList />;
};

const Example5 = () => {
    return <Cube />;
};

const router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/example1',
                element: <Example1 />,
            },
            {
                path: '/example2',
                element: <Example2 />,
            },
            {
                path: '/example3',
                element: <Example3 />,
            },
            {
                path: '/example4',
                element: <Example4 />,
            },
            {
                path: '/example5',
                element: <Example5 />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
