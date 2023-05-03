import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPaletteName: '',
      stage: 'form'
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  handleNameChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  showEmojiPicker() {
    this.setState({ stage: 'emoji' });
  }

  savePalette(emoji) {
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    };
    this.props.handleSave(newPalette);
    this.setState({ stage: '' });
  }

  render() {
    const { newPaletteName, stage } = this.state;
    const { hideForm } = this.props;
    return (
      <div>
        <Dialog open={stage === 'emoji'} onClose={hideForm}>
          <DialogTitle id='form-dialog-title'>
            Choose A Palette Emoji
          </DialogTitle>
          <Picker title='Pick a Palette Emoji' onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={stage === 'form'}
          onClose={hideForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Choose A Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a new name for your new beautiful palette. Make
                sure it's unique!
              </DialogContentText>
              <TextValidator
                label='Palette Name'
                name='newPaletteName'
                value={newPaletteName}
                onChange={this.handleNameChange}
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['this field is required', 'name already used']}
                margin='normal'
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color='primary'>
                Cancel
              </Button>
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
