require "pry"

class SinglyLinkedList
  include Enumerable # Shameless copied from class
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

  # TODO
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
    return nil if @head == nil
    removed_node = @head
    @head = @head.next
    removed_node
  end

  def insert_after(node, new_value)
    current_node = @head
    for i in 1..node
      unless current_node.next.nil?
        current_node = current_node.next
      else
        current_node.next = Node.new(new_value)
        return
      end
    end
    next_node = current_node.next
    insert = Node.new(new_value)
    insert.next = next_node
    current_node.next = insert
  end

  def find(needle)
    # return the node with the value of needle (or nil)
    current_node = @head
    index = 0;
    while current_node do
      return index if current_node.value == needle
      current_node = current_node.next
      index = index + 1
    end
    return false
  end

  # Tricky
  def reverse # non-destructive
    reversed_list = SinglyLinkedList.new
    current_node = @head
    until current_node == nil
      reversed_list.prepend(current_node.value)
      current_node = current_node.next # stepping/walking the list
    end
    reversed_list
  end

  # Trickier
  def reverse! # destructive
    reversed_list = SinglyLinkedList.new
    current_node = @head
    until current_node == nil
      reversed_list.prepend(current_node.value)
      current_node = current_node.next # stepping/walking the list
    end
    reversed_list
    @head = reversed_list.head
  end

  # Trickiest -- how do you accept/invoke a block (do/end)?
  # Shamelessly copied from class
  def each
    node = @head
    while node
      yield(node.value) if block_given?
      node = node.next
    end
  end

  # Bonus: .map, .reduce, .select, .reject
  # Bonus: .at_index(3) # equivalent to bros[3]
end

# Test data
list = SinglyLinkedList.new(1);
list.append(2);
list.append(3);
list.append(4);

list.each do |node|
  puts node
end

binding.pry
