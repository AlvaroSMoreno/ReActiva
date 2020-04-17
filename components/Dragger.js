import Link from 'next/link';
import ReactDOM from 'react-dom';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import {useState,useEffect} from 'react'

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


const Dragger = (props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className="dz"><span>Arrastra aquí tu imagen/documentos o click y selecciona...</span></div>
      </div>
      <style jsx>
        {
          `
          .dz {
            border: 2px dashed lightblue;
            min-height: 8em;
            display: table;
            min-width: 100%;
          }
          span {
            display:table-cell;
            vertical-align:middle;
            text-align: center;
          }
          `
        }
      </style>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
export default Dragger;