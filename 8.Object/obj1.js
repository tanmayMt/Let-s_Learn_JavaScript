function Node(info,link)
{
    this.info=info;
    this.link=link;
}

function LinkList(head)
{
    this.head=head;
    this.add=function(){
        if (this.head == null)
        {
            alert("Linked list is empty!!");
            return null;
        }
        
    }
    this.display=function()
    {
        ptr=this.head
        while (ptr.link != null)
        {
            document.write(ptr.info," ");
            ptr=ptr.link;
        }
    }
}

n=new Node(10,null);
l=new LinkList(n);

n1=new Node(30,null);
l1=new LinkList(n1);
