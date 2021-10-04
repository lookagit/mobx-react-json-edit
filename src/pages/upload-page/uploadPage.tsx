import { Button, Typography } from '@mui/material';
import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { PageContent } from '../../components/page-content/page-content';
import { JsonStore } from '../../stores/JSONStore';

const UploadPage: React.FunctionComponent<TypedStoreProps> = inject("jsonStore")(observer(({ jsonStore }: TypedStoreProps): JSX.Element => (
    <div style={{ justifyContent: 'center', flexDirection: 'column', alignItems: 'center', display: 'flex', height: '200px'  }}>
      <PageContent>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h3" className="text">
          Upload Please
        </Typography>
        <label htmlFor="btn-upload">
          <input
            id="btn-upload"
            name="btn-upload"
            style={{ display: 'none' }}
            type="file"
            accept=".json"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              let fileList: File | null = event && event.target && event.target.files && event.target.files[0];
              let reader: FileReader = new FileReader();
              reader.onload = (event: any) => {
                let str = event.target.result;
                let json = JSON.parse(str);
                jsonStore?.setJSON(json);
              }
              fileList && reader.readAsText(fileList)
            }}
          />

          <Button
            className="btn-choose"
            variant="outlined"
            component="span" >
             Choose Files
          </Button>
        </label>
        </div>
      </PageContent>
      <div>
        { jsonStore && jsonStore.JSONList && jsonStore.JSONList.length ? <Link to="/JSONList"> GO TO JSON </Link> : null}
      </div>
    </div>
  )))

interface StoreProps {
  /** Settings store */
  jsonStore: JsonStore;
}

type InjectedProps = StoreProps;

type TypedStoreProps = Partial<InjectedProps>;

export  { UploadPage as UploadPage }
