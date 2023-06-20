import React,{Component} from 'react'

class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  getWordCount = () => {
    const { text } = this.state;
    const wordCount = text === '' ? 0 : text.trim().split(/\s+/).length;
    return wordCount;
  };

  render() {
    const wordCount = this.getWordCount();

    return (
      <div>
        <h1 style={{textAlign: 'center'}}>Responsive Paragraph Counter</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}><textarea rows={5} style={{width:'50%'}} value={this.state.text} onChange={this.handleTextChange} /></div>  
        <p style={{textAlign: 'center'}}>Word Count: {wordCount}</p>
      </div>
    );
  }
}

export default Task1