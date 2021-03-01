require 'pry'

class SinglyLinkedList
  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) # unshift
    node = Node.new value
    node.next = @head
    @head = node # the new node is the new head.
  end

  def append(value) # push
    last.next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next # walking
    end
    current_node # implicit return
  end

  # TODO:
  def remove # AKA shift() - remove the first node
    @head = @head.next
    # TODO: return nil when there are no nodes left
  end

  def insert_after(node, new_value)
    @current_node = @head

    needle.times do
      @current_node = @current_node.next
    end

    node = Node.new new_value
    node.next = @head #TODO
    @head = node # the new node is the new head.


    return @current_node
  end

  def find(needle)
    @current_node = @head

    needle.times do
      @current_node = @current_node.next
    end

    return @current_node
    # return the node with the value of needle (or nil)
  end

  # Tricky
  def reverse # non-destructive
  end

  # Trickier
  def reverse! # destructive
  end

  # Trickiest -- how do you accept/invoke a block (do/end)?
  def each
  end

  # Bonus: .map, .reduce, .select, .reject
  # Bonus: .at_index(3) # equivalent to bros[3]
end

# bros.each do |b|
#   puts b
# end

binding.pry
